<?php

namespace App\Http\Controllers;

use App\AdminProfile;
use Illuminate\Http\Request;
use App\Http\Requests\ProfileRequest;
use App\Discussions;
use App\Chanel;
use App\User;
use Session;

class AdminProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $profiles = Profile::orderBy('created_at', 'asc')->paginate(4);
        $total = Profile::all();
        $page_name = 'Profile';

        return view('admin.profiles.index', compact('profiles', 'total', 'page_name'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $total = Profile::all();
        $page_name = 'Create a Profile';
        return view('admin.profiles.create', compact('total', 'page_name'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProfileRequest $request)
    {
       
        $file = $request->file('image');
        $name = time() . '-' . $file->getClientOriginalName();
        $file->move('images', $name);

        $user_name = User::

        $profile = Profile::create([


            'user_id'       => $request->user_id, 
            'chanel_id'     => $request->chanel_id,
            'first_name'    => $request->first_name,
            'last_name'     => $request->last_name,
            'birthday'      => $request->birthday,
            'slug'          => str_slug($request->title, '-'),      
            'about_user'    => $request->about_user,
            'image'         => $name,

       ]);   

        $profile->save();

        Session::flash('success', 'Chanel successfully created!');
     
        return redirect()->route('admin-chanels.show', $profile->slug);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $profile = Profile::where('slug', $slug)->first();
        $discussions = Discussion::where('profile_id', $profile->id)->paginate(4);
        $replies = array();
        $likes_per_discussion = "";
        foreach ($discussion as $discussion) {
            array_push($replies, $discussion->replies);
            foreach ($discussion->replies as $reply) {
                $likes_per_discussion = $likes_per_discussion + count($repliy->likes)
            }
        }


        $page_name = $profile->title;
        $total = 0;

        return view('admin.profiles.show', compact('profile', 'page_name', 'total', 'replies', 'likes_per_discussion'));
    }

    public function edit($slug)
    {
        //find the film in the database
        $profile = Profile::where('slug', $slug)->first(); 
        $page_name = 'Edit: ' . $profile->title;
        $subcategories = Subcategory::orderBy('title', 'asc')->pluck('title', 'id')->all();

          return view('admin.profiles.edit', compact('profile', 'subcategories', 'page_name'));

    }

    public function update(ProfileRequest $request, $slug)
    {
        $input = $request->all();
        $input['slug'] = str_slug($request->title, '-');

        if ( $file = $request->file('image')) {
            $name = time() . '-' . $file->getClientOriginalName();
            $file->move('images', $name);
            $input['image'] = $name;
        }

        $profile = Profile::where('slug', $slug)->first();
        $profile->fill($input)->save();
        $page_name = $profile->title;

        Session::flash('success', 'Chanel successfully updated!');
     
        return redirect()->route('admin-chanels.show', $profile->slug);
    }

    public function destroy($slug)
    {
        $profile = Profile::where('slug', $slug)->first();
        $profile->delete();

        Session::flash('success', 'Chanel successfully deleted!');

        return redirect()->route('admin-chanels.index');
    }     

    public function trashed()
    {
        $profiles = Profile::onlyTrashed()->get();
        $page_name = 'Trashed Chanels';

        return view('admin.profiles.trashed', compact('chanels', 'page_name'));
    }

    public function restore($slug)
    {
        $profile = Profile::withTrashed()->where('slug', $slug)->first();
        $profile->restore();

        Session::flash('success', 'Chanel successfully restored!');
        return redirect()->route('admin-chanels.trashed');
    }

    public function kill($slug)
    {
        $profile = Profile::withTrashed()->where('slug', $slug)->first();
        $profile->forceDelete();

        Session::flash('success', 'Chanel pemanently deleted!');
        return redirect()->route('admin-chanels.trashed');
    }

}
