<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CategoriesRequest;
use App\Chanel;
use App\Subcategory;
use App\Category;
use Session;

class CategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::orderBy('created_at', 'asc')->with('subcategories')->paginate(4);
        $total = Category::all();
        $page_name = 'Categories Index';

        return view('categories.index', compact('categories', 'total', 'page_name'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::all();
        $total = Category::all();
        $page_name = 'Create a Category';
        return view('categories.create', compact('categories', 'total', 'page_name'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CategoriesRequest $request)
    {
        $file = $request->file('image');
        $name = time() . '-' . $file->getClientOriginalName();
        $file->move('images', $name);

        $category = Category::create([

            'title'             => $request->title,
            'subtitle'          => $request->subtitle,
            'slug'              => str_slug($request->title, '-'),
            'excerpt'           => $request->excerpt,                       
            'status'            => $request->status,
            'about_category'    => $request->about_category, 
            'image'             => $name,      
            'is_featured'       => $request->is_featured,
            'in_menu'           => $request->in_menu,

       ]);   

        $category->save();

        Session::flash('success', 'Category successfully created!');
     
        return redirect()->route('categories.show', $category->slug);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $category = Category::with('subcategories')->withCount(['subcategories', 'chanels'])->where('slug', $slug)->first();
      
        $page_name = $category->title;
        $total = 0;

        return view('categories.show', compact('category', 'page_name', 'total'));
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
