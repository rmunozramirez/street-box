<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ChanelsRequest;
use App\Chanel;
use App\Category;
use App\Subcategory;
use Session;

class ChanelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $chanels = Chanel::orderBy('created_at', 'asc')->paginate(4);
        $total = Chanel::all();
        $page_name = 'Chanel';

        return view('chanels.index', compact('chanels', 'total', 'page_name'));
    }

    public function show($slug)
    {
        $chanel = Chanel::where('slug', $slug)->first();
        $page_name = $chanel->title;
        $total = 0;

        return view('chanels.show', compact('chanel', 'page_name', 'total'));
    }
}