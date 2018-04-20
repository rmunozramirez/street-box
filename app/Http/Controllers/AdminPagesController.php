<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\Pagesrequest;
use App\Page;
use Session;

class AdminPagesController extends Controller
{
    public function index()
    {
        $pages = Page::orderBy('created_at', 'asc')->paginate(4);
        $page_name = 'Page';

        return view('admin.pages.index', compact('pages', 'page_name'));
    }

    public function create()
    {

        $page_name =  'Create a new Page';
        return view('admin.pages.create', compact('pages', 'Pagecategories', 'page_name'));
    }

    public function store(Pagesrequest $request)
    {

        $file = $request->file('image');
        $name = time() . '-' . $file->getClientOriginalName();
        $file->move('images', $name);

        $page = Page::create([
            'title'             =>  $request->title,
            'subtitle'          =>  $request->subtitle,
            'excerpt'           =>  $request->excerpt,
            'body'              =>  $request->body,
            'slug'              =>  str_slug($request->title, '-'),
            'image'             =>  $name,
            'status_id'         => $request->status_id,

        ]);        

        $page->save();

        Session::flash('success', 'Page successfully created!');
     
        return redirect()->route('admin-pages.show', $page->slug);
    }

    public function show($slug)
    {
        $page = Page::where('slug', $slug)->first();
        $page_name = $page->title;

        return view('admin.pages.show', compact('page', 'page_name'));
    }

    public function edit($slug)
    {

        $page = Page::where('slug', $slug)->first(); 
        $page_name = 'Edit: ' . $page->title;

          return view('admin.pages.edit', compact('page', 'page_name'));

    }

    public function update(Pagesrequest $request, $slug)
    {
        $input = $request->all();
        $input['slug'] = str_slug($request->title, '-');

        if ( $file = $request->file('image')) {
            $name = time() . '-' . $file->getClientOriginalName();
            $file->move('images', $name);
            $input['image'] = $name;
        }

        $page = Page::where('slug', $slug)->first();
        $page->fill($input)->save();
        $page_name = $page->title;

        Session::flash('success', 'Page successfully updated!');
     
        return redirect()->route('admin-pages.show', $page->slug);
    }

    public function destroy($slug)
    {
        
        $page = Page::where('slug', $slug)->first();
        $page->delete();

        Session::flash('success', 'Page successfully deleted!');
        return redirect()->route('admin-pages.index');
    }


    public function trashed()
    {
        $pages = Page::onlyTrashed()->get();
        $page_name = 'Trashed pages';

        return view('admin.pages.trashed', compact('pages', 'page_name'));
    }

    public function restore($slug)
    {
        $page = Page::withTrashed()->where('slug', $slug)->first();
        $page->restore();

        Session::flash('success', 'Page successfully restored!');
        return redirect()->route('admin-pages.trashed');
    }

    public function kill($slug)
    {
        $page = Page::withTrashed()->where('slug', $slug)->first();
        $page->forceDelete();

        Session::flash('success', 'Page pemanently deleted!');
        return redirect()->route('admin-pages.trashed');
    }
}
