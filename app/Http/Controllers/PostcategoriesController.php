<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\PostcategoriesRequest;
use App\Post;
use App\Postcategory;
use Session;

class PostcategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $postcategories = Postcategory::orderBy('created_at', 'asc')->withCount('posts')->paginate(4);
        $total = Postcategory::all();
        $page_name = 'Blog Categories';

        return view('postcategories.index', compact('postcategories', 'total', 'page_name'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $postcategories = Postcategory::all();
        $total = Postcategory::all();
        $page_name = 'Create a Blog Category';
        return view('postcategories.create', compact('postcategories', 'total', 'page_name'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PostcategoriesRequest $request)
    {

        $file = $request->file('image');
        $name = time() . '-' . $file->getClientOriginalName();
        $file->move('images', $name);

        $postcategory = Postcategory::create([
            'title'             =>  $request->title,
            'subtitle'          =>  $request->subtitle,
            'excerpt'           =>  $request->excerpt,
            'about_category'    =>  $request->about_category,
            'slug'              =>  str_slug($request->title, '-'),
            'image'             =>  $name,
            'is_featured'       =>  $request->is_featured,
            'in_menu'           =>  $request->in_menu,
            'status'            =>  $request->status,

        ]);        


        $postcategory->save();

        Session::flash('success', 'Blog Category successfully created!');
     
        return redirect()->route('postcategories.show', $postcategory->slug);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $postcategory = Postcategory::withCount('posts')->where('slug', $slug)->first();
        $page_name = $postcategory->title;
        $total = 1;
        $posts = Post::where('postcategory_id', $postcategory->id)->paginate(4);

        return view('postcategories.show', compact('postcategory', 'posts', 'page_name', 'total'));
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
        $postcategory = Postcategory::where('slug', $slug)->first(); 
        $page_name = 'Edit: ' . $postcategory->title;

          return view('postcategories.edit', compact('postcategory', 'page_name'));

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(PostcategoriesRequest $request, $slug)
    {
        $input = $request->all();
        $input['slug'] = str_slug($request->title, '-');

        if ( $file = $request->file('image')) {
            $name = time() . '-' . $file->getClientOriginalName();
            $file->move('images', $name);
            $input['image'] = $name;
        } else {
            $input['image'] = $$request->image;
        }

        $postcategory = Postcategory::where('slug', $slug)->first();
        $postcategory->fill($input)->save();
        $page_name = $postcategory->title;

        Session::flash('success', 'Postcategory successfully updated!');
     
        return redirect()->route('postcategories.show', $postcategory->slug);
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
