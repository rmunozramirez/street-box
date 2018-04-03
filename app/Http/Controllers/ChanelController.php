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

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

        $total = Chanel::all();
        $page_name = 'Create a chanel';
        return view('chanels.create', compact('total', 'page_name'));
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
    
            'title'         => $request->title,
            'slug'          => str_slug($request->title, '-'),      
            'subtitle'      => $request->subtitle,
            'subcategory_id' => $request->subcategory_id,
            'excerpt'       => $request->excerpt,
            'about_chanel'  => $request->about_chanel,            
            'image'         => $name,
            'video'         => $request->video,         
            'web'           => $request->web,
            'facebook'      => $request->facebook,
            'googleplus'    => $request->googleplus,
            'twitter'       => $request->twitter,
            'linkedin'      => $request->linkedin,
            'youtube'       => $request->youtube,

       ]);   

        $chanel->save();

        Session::flash('success', 'Chanel successfully created!');
     
        return redirect()->route('chanels.show', $chanel->slug);
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

        return view('chanels.show', compact('chanel', 'page_name', 'total'));
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
        $chanel = Chanel::where('slug', $slug)->first(); 
        $page_name = 'Edit: ' . $chanel->title;
        $subcategories = Subcategory::orderBy('title', 'asc')->pluck('title', 'id')->all();

          return view('chanels.edit', compact('chanel', 'subcategories', 'page_name'));

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
     
        return redirect()->route('chanels.show', $chanel->slug);
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
