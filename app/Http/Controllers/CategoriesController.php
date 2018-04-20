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
            'about_category'    => $request->about_category, 
            'image'             => $name,
            'status_id'         => $request->status_id,

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
    public function edit($slug)
    {
        //find the film in the database
        $category = Category::where('slug', $slug)->first(); 
        $page_name = 'Edit: ' . $category->title;

          return view('categories.edit', compact('category', 'page_name'));

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(CategoriesRequest $request, $slug)
    {
        $input = $request->all();
        $input['slug'] = str_slug($request->title, '-');

        if ( $file = $request->file('image')) {
            $name = time() . '-' . $file->getClientOriginalName();
            $file->move('images', $name);
            $input['image'] = $name;
        }

        $category = Category::where('slug', $slug)->first();
        $category->fill($input)->save();
        $page_name = $category->title;

        Session::flash('success', 'Category successfully updated!');
     
        return redirect()->route('categories.show', $category->slug);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($slug)
    {
        $category = Category::where('slug', $slug)->first();

        if(count($category->subcategories) == 0 ) {

            $category->delete();
            Session::flash('success', $category->title . ' successfully deleted!');

            return redirect()->route('categories.index');

        } else {

            Session::flash('error', $category->title . ' is not empty and can\'t be deleted!');

            return redirect()->route('categories.show', $category->slug);
        }
    }     

    public function trashed()
    {
        $categories = Category::onlyTrashed()->get();
        $page_name = 'Trashed Categories';

        return view('categories.trashed', compact('categories', 'page_name'));
    }

    public function restore($slug)
    {
        $category = Category::withTrashed()->where('slug', $slug)->first();
        $category->restore();

        Session::flash('success', 'Category successfully restored!');
        return redirect()->route('categories.trashed');
    }

    public function kill($slug)
    {
        $category = Category::withTrashed()->where('slug', $slug)->first();
        $category->forceDelete();

        Session::flash('success', 'Category pemanently deleted!');
        return redirect()->route('categories.trashed');
    }
}
