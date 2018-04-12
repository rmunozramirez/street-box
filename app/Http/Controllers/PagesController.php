<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Page;
use Session;

class PagesController extends Controller
{

    public function show($slug)
    {
        $page = Page::where('slug', $slug)->first();
        $page_name = $page->title;

        return view('pages.show', compact('page', 'page_name'));
    }
}
