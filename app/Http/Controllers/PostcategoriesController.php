<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\PostcategoriesRequest;
use App\Post;
use App\Postcategory;
use Session;

class PostcategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $postcategories = Postcategory::orderBy('created_at', 'asc')->withCount('posts')->paginate(4);
        $total = Postcategory::all();
        $page_name = 'Post Category';

        return view('postcategories.index', compact('postcategories', 'total', 'page_name'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $postcategories = Postcategory::all();
        $total = Postcategory::all();
        $page_name = 'Category';
        return view('postcategories.create', compact('postcategories', 'total', 'page_name'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PostcategoriesRequest $request)
    {

        $file = $request->file('image');
        $name = time() . '-' . $file->getClientOriginalName();
        $file->move('images', $name);
        
        $last_img = Image::orderBy('id', 'desc')->first(); 
               
        is_null($last_img) ? $img_id = 1 : $img_id =  $last_img->id + 1;
       
        $category = Postcategory::create([
            'category'      =>  $request->category,
            'description'   =>  $request->description,
            'slug'          =>  str_slug($request->category, '-'),
            'image_id'      =>  $img_id,
        ]);        

        $image = Image::create([
            'image'         =>  $name,
            'film_id'       => 0,
            'actor_id'      => 0,
            'category_id'   => $film->id,
        ]);

        $category->save();

        Session::flash('success', 'Category successfully created!');
     
        return redirect()->route('postcategories');

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $postcategory = Postcategory::withCount('posts')->where('slug', $slug)->first();
        $page_name = $postcategory->title;
        $total = 1;
        $posts = Post::where('postcategory_id', $postcategory->id)->paginate(4);

        return view('postcategories.show', compact('postcategory', 'posts', 'page_name', 'total'));
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
