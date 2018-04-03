<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use App\Http\Requests\Postsrequest;
use App\Postcategory;
use Session;

class PostsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Post::orderBy('created_at', 'asc')->paginate(4);
        $total = Post::all();
        $page_name = 'Post';
        $postcategories = Postcategory::all();

        return view('posts.index', compact('posts', 'total', 'page_name', 'postcategories'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
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


        return view('posts.create', compact('posts', 'postcategories', 'page_name'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
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

        Session::flash('success', 'Blog Post successfully created!');
     
        return redirect()->route('posts.show', $post->slug);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $post = Post::where('slug', $slug)->first();
        $page_name = $post->title;
        $postcategories = Postcategory::all();

        return view('posts.show', compact('post', 'page_name', 'total', 'postcategories'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($slug)
    {
        //find the film in the database
        $post = Post::where('slug', $slug)->first(); 
        $page_name = 'Edit: ' . $post->title;
        $postcategories = Postcategory::orderBy('title', 'asc')->pluck('title', 'id')->all();

          return view('posts.edit', compact('post', 'postcategories', 'page_name'));

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
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

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
