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
            'slug'          => str_slug($request->name, '-'),      
            'subtitle'      => $request->subtitle,
            'excerpt'       => $request->excerpt,
            'about_chanel'  => $request->about_chanel,            
            'image'         => $request->name,
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
