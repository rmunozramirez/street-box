<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\PosttagsRequest;
use App\Post;
use App\Posttag;
use Session;

class PosttagController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posttags = Posttag::orderBy('created_at', 'asc')->paginate(4);
        $total = Posttag::all();
        $page_name = 'Post tags';
        $posts = Post::all();

        return view('admin.posttags.index', compact('posts', 'total', 'page_name', 'posttags'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
        $page_name = 'Create a Blog Tag';
        return view('admin.posttags.create', compact('page_name'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PosttagsRequest $request)
    {

        $posttag = Posttag::create([
            'name'  =>  $request->name,
            'slug'  =>  str_slug($request->name, '-'),
        ]);        

        $posttag->save();
        Session::flash('success', 'Blog Tag successfully created!');
        return redirect()->route('posttags.show', $posttag->slug);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $slug
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $posttag = Posttag::where('slug', $slug)->first();
        $page_name = $posttag->name;
        $total = 1;

        return view('admin.posttags.show', compact('posttag', 'page_name', 'total'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $slug
     * @return \Illuminate\Http\Response
     */
    public function edit($slug)
    {
        $posttag = Posttag::where('slug', $slug)->first();
        $page_name = 'Edit: ' . $posttag->name;

        return view('admin.posttags.edit', compact('posttag', 'page_name'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $slug
     * @return \Illuminate\Http\Response
     */
    public function update(PosttagsRequest $request, $slug)
    {
        $input = $request->all();
        $input['slug'] = str_slug($request->name, '-');

        $posttag = Posttag::where('slug', $slug)->first();
        $posttag->fill($input)->save();
        $page_name = $posttag->title;

        Session::flash('success', 'Post tag successfully updated!');
     
        return redirect()->route('posttags.show', $posttag->slug);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $slug
     * @return \Illuminate\Http\Response
     */
    public function destroy($slug)
    {
        
        $posttag = Posttag::where('slug', $slug)->first();
        $posttag->delete();

        Session::flash('success', 'Post Tag successfully deleted!');
        return redirect()->route('posttags.index');
    }
}
