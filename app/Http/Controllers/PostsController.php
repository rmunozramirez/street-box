<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use App\Postcategory;
use App\Posttag;
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

        return view('news.index', compact('posts', 'total', 'page_name', 'postcategories'));
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

        return view('news.show', compact('post', 'page_name', 'total', 'postcategories'));
    }

}

