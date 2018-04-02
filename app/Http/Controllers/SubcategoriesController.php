<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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
