<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\SubcategoriesRequest;
use App\Chanel;
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

    public function show($slug)
    {
        $subcategory = Subcategory::withCount('chanels')->where('slug', $slug)->first();
        $page_name = $subcategory->title;
        $total = $subcategory;
        $chanels = Chanel::where('subcategory_id', $subcategory->id)->paginate(4);
        
        return view('subcategories.show', compact('subcategory', 'page_name', 'total', 'chanels'));
    }

}
