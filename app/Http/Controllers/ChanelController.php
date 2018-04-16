<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ChanelsRequest;
use App\Chanel;
use App\Category;
use App\Subcategory;
use App\Profile;
use Session;
use Auth;

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

        $page_name = 'Create a chanel';
        return view('profile.chanel.create', compact('total', 'page_name'));
    }

    public function store(ChanelsRequest $request)
    {
       
        $file = $request->file('image');
        $name = time() . '-' . $file->getClientOriginalName();
        $file->move('images', $name);

        $chanel = Chanel::create([

            'subcategory_id' => $request->subcategory_id,
            'profile_id'    =>  $request->profile_id, 
            'status'        =>  $request->status,
            'title'         =>  $request->title,
            'slug'          =>  str_slug($request->title, '-'),      
            'subtitle'      =>  $request->subtitle,                
            'excerpt'       =>  $request->excerpt,
            'about_chanel'  =>  $request->about_chanel,            
            'image'         =>  $name,
            'video'         =>  $request->video, 
            'is_featured'   =>  $request->is_featured,        
            'web'           =>  $request->web,
            'facebook'      =>  $request->facebook,
            'googleplus'    =>  $request->googleplus,
            'twitter'       =>  $request->twitter,
            'linkedin'      =>  $request->linkedin,
            'youtube'       =>  $request->youtube,
       ]);   

        $chanel->save();

        Session::flash('success', 'Chanel successfully created!');
     
        return redirect()->route('profile.chanel.show', $chanel->slug);
    }

    public function show($slug)
    {

        $user = Auth::user();
        $profile = Profile::where('user_id', $user->id)->first();
        $chanel = Chanel::where('profile_id', $profile->id)->first();

        if ($chanel === NULL ) {
            $page_name = 'Create your Chanel';
            return view('profile.chanels.create', compact('page_name', 'user'));

        } else {
            $page_name = $chanel->title;
            return view('profile.chanel.show', compact('chanel', 'page_name', 'user'));
        }
    }

    public function edit($slug)
    {
        $user = Auth::user();
        $profile = Profile::where('user_id', $user->id)->first();
        $chanel = Chanel::where('profile_id', $profile->id)->first();
        $subcategories = Subcategory::orderBy('title', 'asc')->pluck('title', 'id')->all();
        $page_name = $chanel->title;

          return view('profile.chanel.edit', compact('chanel', 'subcategories', 'page_name', 'user'));

    }

    public function update(ChanelsRequest $request, $slug)
    {
        $input = $request->all();
        $input['slug'] = str_slug($request->title, '-');

        if ( $file = $request->file('image')) {
            $name = time() . '-' . $file->getClientOriginalName();
            $file->move('images', $name);
            $input['image'] = $name;
        }

        $user = Auth::user();
        $profile = Profile::where('user_id', $user->id)->first();
        $chanel = Chanel::where('profile_id', $profile->id)->first();
        $chanel->fill($input)->save();
        $page_name = $chanel->title;

        Session::flash('success', 'Chanel successfully updated!');
     
        return redirect()->route('profile.chanel.show', $chanel->slug);
    }

    public function destroy($slug)
    {
        $chanel = Chanel::where('slug', $slug)->first();
        $chanel->delete();

        Session::flash('success', 'Chanel successfully deleted!');

        return redirect()->route('admin-chanels.index');
    }
}