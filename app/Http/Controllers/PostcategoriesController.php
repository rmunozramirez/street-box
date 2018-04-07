<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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

        return view('newscategories.index', compact('postcategories', 'total', 'page_name'));
    }

    public function show($slug)
    {
        $postcategory = Postcategory::withCount('posts')->where('slug', $slug)->first();
        $page_name = $postcategory->title;
        $total = 1;
        $posts = Post::where('postcategory_id', $postcategory->id)->paginate(4);

        return view('newscategories.show', compact('postcategory', 'posts', 'page_name', 'total'));
    }

}
