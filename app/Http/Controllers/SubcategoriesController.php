<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\SubcategoriesRequest;
use App\Chanel;
use App\Category;
use App\Subcategory;
use Session;

class SubcategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $subcategories = Subcategory::orderBy('created_at', 'asc')->paginate(4);
        $total = Subcategory::all();
        $page_name = 'Subcategories Index';

        return view('subcategories.index', compact('subcategories', 'total', 'page_name'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $subcategories = Subcategory::all();
        $total = Subcategory::all();
        $page_name = 'Create a subcategory';
        return view('subcategories.create', compact('subcategories', 'total', 'page_name'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SubcategoriesRequest $request)
    {
        $file = $request->file('image');
        $name = time() . '-' . $file->getClientOriginalName();
        $file->move('images', $name);

        $subcategory = Subcategory::create([
    
            'category_id'       => $request->category_id,
            'title'             => $request->title,
            'subtitle'          => $request->subtitle,
            'slug'              => str_slug($request->title, '-'),
            'excerpt'           => $request->excerpt,                       
            'status'            => $request->status,
            'about_subcategory' => $request->about_subcategory, 
            'image'             => $name,      
            'is_featured'       => $request->is_featured,
            'in_menu'           => $request->in_menu,

       ]);   

        $subcategory->save();

        Session::flash('success', 'Subcategory successfully created!');
     
        return redirect()->route('subcategories.show', $subcategory->slug);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $subcategory = Subcategory::withCount('chanels')->where('slug', $slug)->first();
        $page_name = $subcategory->title;
        $total = $subcategory;
        $chanels = Chanel::where('subcategory_id', $subcategory->id)->paginate(4);
        
        return view('subcategories.show', compact('subcategory', 'page_name', 'total', 'chanels'));
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
        $subcategory = Subcategory::where('slug', $slug)->first(); 
        $page_name = 'Edit: ' . $subcategory->title;
        $categories = Category::orderBy('title', 'asc')->pluck('title', 'id')->all();

          return view('subcategories.edit', compact('subcategory', 'categories', 'page_name'));

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(SubcategoriesRequest $request, $slug)
    {
        $input = $request->all();
        $input['slug'] = str_slug($request->title, '-');

        if ( $file = $request->file('image')) {
            $name = time() . '-' . $file->getClientOriginalName();
            $file->move('images', $name);
            $input['image'] = $name;
        }

        $subcategory = Subcategory::where('slug', $slug)->first();
        $subcategory->fill($input)->save();
        $page_name = $subcategory->title;

        Session::flash('success', 'Subcategory successfully updated!');
     
        return redirect()->route('subcategories.show', $subcategory->slug);
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
