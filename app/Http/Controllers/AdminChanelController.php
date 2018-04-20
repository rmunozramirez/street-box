<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ChanelsRequest;
use App\Chanel;
use App\Category;
use App\Subcategory;
use Session;

class AdminChanelController extends Controller
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

        return view('admin.chanels.index', compact('chanels', 'total', 'page_name'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

        $total = Chanel::all();
        $page_name = 'Create a chanel';
        return view('admin.chanels.create', compact('total', 'page_name'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ChanelsRequest $request)
    {
       
        $file = $request->file('image');
        $name = time() . '-' . $file->getClientOriginalName();
        $file->move('images', $name);

        $chanel = Chanel::create([

            'subcategory_id' => $request->subcategory_id,
            'status_id'     => $request->status_id,
            'profile_id'    =>  $request->profile_id, 
            'title'         =>  $request->title,
            'slug'          =>  str_slug($request->title, '-'),      
            'subtitle'      =>  $request->subtitle,                
            'excerpt'       =>  $request->excerpt,
            'about_chanel'  =>  $request->about_chanel,            
            'image'         =>  $name,

       ]);   

        $chanel->save();

        Session::flash('success', 'Chanel successfully created!');
     
        return redirect()->route('admin-chanels.show', $chanel->slug);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $chanel = Chanel::where('slug', $slug)->first();
        $page_name = $chanel->title;
        $total = 0;

        return view('admin.chanels.show', compact('chanel', 'page_name', 'total'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($slug)
    {

        $chanel = Chanel::where('slug', $slug)->first(); 
        $page_name = 'Edit: ' . $chanel->title;
        $subcategories = Subcategory::orderBy('title', 'asc')->pluck('title', 'id')->all();

          return view('admin.chanels.edit', compact('chanel', 'subcategories', 'page_name'));

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ChanelsRequest $request, $slug)
    {
        $input = $request->all();
        $input['slug'] = str_slug($request->title, '-');

        if ( $file = $request->file('image')) {
            $name = time() . '-' . $file->getClientOriginalName();
            $file->move('images', $name);
            $input['image'] = $name;
        }

        $chanel = Chanel::where('slug', $slug)->first();
        $chanel->fill($input)->save();
        $page_name = $chanel->title;

        Session::flash('success', 'Chanel successfully updated!');
     
        return redirect()->route('admin-chanels.show', $chanel->slug);
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($slug)
    {
        $chanel = Chanel::where('slug', $slug)->first();
        $chanel->delete();

        Session::flash('success', 'Chanel successfully deleted!');

        return redirect()->route('admin-chanels.index');
    }     


    public function trashed()
    {
        $chanels = Chanel::onlyTrashed()->get();
        $page_name = 'Trashed Chanels';

        return view('admin.chanels.trashed', compact('chanels', 'page_name'));
    }

    public function restore($slug)
    {
        $chanel = Chanel::withTrashed()->where('slug', $slug)->first();
        $chanel->restore();

        Session::flash('success', 'Chanel successfully restored!');
        return redirect()->route('admin-chanels.trashed');
    }

    public function kill($slug)
    {
        $chanel = Chanel::withTrashed()->where('slug', $slug)->first();
        $chanel->forceDelete();

        Session::flash('success', 'Chanel pemanently deleted!');
        return redirect()->route('admin-chanels.trashed');
    }
}