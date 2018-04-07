<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use App\Http\Requests\Postsrequest;
use App\Postcategory;
use App\Posttag;
use Session;

class AdminPostsController extends Controller
{

    public function index()
    {
        $posts = Post::orderBy('created_at', 'asc')->paginate(4);
        $total = Post::all();
        $page_name = 'Post index';
        $postcategories = Postcategory::all();

        return view('admin.posts.index', compact('posts', 'total', 'page_name', 'postcategories'));
    }

    public function create()
    {
     
        $postcategories = Postcategory::pluck('title', 'id')->all();         
        $postcategoriescount = Postcategory::all();
        $page_name =  'Create a new Post';

        if(count($postcategoriescount) == 0 )
        {
            Session::flash('info', 'You must have at least a categoy before attempting to create a Post.');

            return redirect()->back();
        }


        return view('admin.posts.create', compact('posts', 'postcategories', 'page_name'));
    }

    public function store(Postsrequest $request)
    {

        $file = $request->file('image');
        $name = time() . '-' . $file->getClientOriginalName();
        $file->move('images', $name);

        $post = Post::create([
            'title'             =>  $request->title,
            'subtitle'          =>  $request->subtitle,
            'status'            =>  $request->status,
            'excerpt'           =>  $request->excerpt,
            'body'              =>  $request->body,
            'slug'              =>  str_slug($request->title, '-'),
            'image'             =>  $name,
            'postcategory_id'   =>  $request->postcategory_id,
            'is_featured'       =>  $request->is_featured,

        ]);        


        $post->save();

        //sync with tags
        if ($request->posttags_id) {
            $post->posttag()->sync($request->posttag_id);
        }


        Session::flash('success', 'Blog Post successfully created!');
     
        return redirect()->route('posts.show', $post->slug);
    }

    public function show($slug)
    {
        $post = Post::where('slug', $slug)->first();
        $page_name = $post->title;
        $postcategories = Postcategory::all();

        return view('admin.posts.show', compact('post', 'page_name', 'total', 'postcategories'));
    }

    public function edit($slug)
    {
        //find the film in the database
        $post = Post::where('slug', $slug)->first(); 
        $page_name = 'Edit: ' . $post->title;
        $postcategories = Postcategory::orderBy('title', 'asc')->pluck('title', 'id')->all();

          return view('admin.posts.edit', compact('post', 'postcategories', 'page_name'));

    }

    public function update(Postsrequest $request, $slug)
    {
        $input = $request->all();
        $input['slug'] = str_slug($request->title, '-');

        if ( $file = $request->file('image')) {
            $name = time() . '-' . $file->getClientOriginalName();
            $file->move('images', $name);
            $input['image'] = $name;
        }

        $post = Post::where('slug', $slug)->first();
        $post->fill($input)->save();
        $page_name = $post->title;

        Session::flash('success', 'Post successfully updated!');
     
        return redirect()->route('posts.show', $post->slug);
    }

    public function destroy($slug)
    {
        
        $post = Post::where('slug', $slug)->first();
        $post->delete();

        Session::flash('success', 'Post successfully deleted!');
        return redirect()->route('posts.index');
    }


    public function trashed()
    {
        $posts = Post::onlyTrashed()->get();
        $page_name = 'Trashed posts';

        return view('admin.posts.trashed', compact('posts', 'page_name'));
    }

    public function restore($slug)
    {
        $post = Post::withTrashed()->where('slug', $slug)->first();
        $post->restore();

        Session::flash('success', 'Post successfully restored!');
        return redirect()->route('posts.trashed');
    }

    public function kill($slug)
    {
        $post = Post::withTrashed()->where('slug', $slug)->first();
        $post->forceDelete();

        Session::flash('success', 'Post pemanently deleted!');
        return redirect()->route('posts.trashed');
    }
}

