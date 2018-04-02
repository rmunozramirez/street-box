<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
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
    public function store(Request $request)
    {
        //
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
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
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
