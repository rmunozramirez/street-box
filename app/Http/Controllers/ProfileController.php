<?php

namespace App\Http\Controllers;

use App\AdminProfile;
use Illuminate\Http\Request;
use App\Http\Requests\ProfileRequest;
use App\Http\Requests\UserRequest;
use App\Chanel;
use App\User;
use App\Profile;
use App\Discussion;
use Session;
use Auth;

class ProfileController extends Controller
{

    public function home($slug)
    {
        $user = Auth::user();
        $profile = Profile::where('user_id', $user->id)->first();
        if ($user->profile === NULL ) {
            $profile = Profile::create([
                'user_id'   => $user->id,
            ]);
        } else {
            $profile = Profile::where('user_id', $user->id)->first();           
        }

        $discussions = Discussion::where('profile_id', $profile->id)->paginate(4);
        $all_user_discussions = Discussion::where('profile_id', $profile->id)->count();
        $page_name = 'Welcome: ' . $user->name;  

        return view('profile.home', compact('user', 'profile', 'discussions', 'all_user_discussions', 'page_name' ));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function persona($slug)
    {

        $user = User::where('slug', $slug)->first();
        $profile = Profile::where('user_id', $user->id)->first();   
        $page_name = 'Profile ' . $user->name;  
        return view('profile.persona', compact('page_name', 'user', 'profile'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function profile($slug)
    {

        $user = User::where('slug', $slug)->first();
        $profile = Profile::where('user_id', $user->id)->first();
        $discussions = Discussion::where('user_id', $user->id)->get();        
        $page_name = 'Profile ' . $user->name;  
        return view('profile.discussions', compact('page_name', 'user', 'profile'));
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
        return view('profile.create', compact('total', 'page_name'));
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

        $profile = Profile::create([

            'user_id'       => $request->user_id,
            'status_id'     => $request->status_id,
            'chanel_id'     => $request->chanel_id,
            'first_name'    => $request->first_name,
            'last_name'     => $request->last_name,
            'birthday'      => $request->birthday,
            'slug'          => str_slug($request->title, '-'),      
            'about_user'    => $request->about_user,
            'image'         => $name,
            'web'           =>  $request->web,
            'facebook'      =>  $request->facebook,
            'googleplus'    =>  $request->googleplus,
            'twitter'       =>  $request->twitter,
            'linkedin'      =>  $request->linkedin,
            'youtube'       =>  $request->youtube,


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
        
        $user = User::where('slug', $slug)->first(); 
        $page_name = 'User area: ' . $user->name;        
        $profile = Profile::where('user_id', $user->id)->first();           

        return view('profile.show', compact('user', 'profile', 'page_name'));
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
        $profile = Profile::where('slug', $slug)->first(); 
        $page_name = 'Edit: ' . $profile->title;
        $subcategories = Subcategory::orderBy('title', 'asc')->pluck('title', 'id')->all();

          return view('profile.edit', compact('profile', 'subcategories', 'page_name'));

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ProfileRequest $request, $slug)
    {
 
        $user = User::where('slug', $slug)->first();

        $input = $request->all();
        $input['slug']      = 'profile_' . $slug;
        $input['user_id']   = $user->id;

        if ( $file = $request->file('image')) {
            $name = time() . '-' . $file->getClientOriginalName();
            $file->move('images', $name);
            $input['image'] = $name;
        }

        $profile = Profile::where('slug', $input['slug'])->first();

        $profile->fill($input)->save();
        $page_name = $profile->title;

        Session::flash('success', 'Chanel successfully updated!');
     
        return redirect()->route('profile.show', $profile->slug);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateuser(UserRequest $request, $slug)
    {
        $input = $request->all();
        if($request->password) { 
            $input['password'] = bcrypt($request->password);
        }
        
        if($request->name) {
            $input['slug'] = str_slug($request->name);       
        }

        $user = User::where('slug', $slug)->first();
        dd($user);
        $user->fill($input)->save();
        $page_name = 'Welcome ' . $profile->user->name;

        Session::flash('success', 'Profile successfully updated!');
     
        return redirect()->route('profile.show', $profile->slug);
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
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

        return view('profile.trashed', compact('chanels', 'page_name'));
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
