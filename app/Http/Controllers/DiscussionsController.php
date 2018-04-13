<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\DiscussionRequest;
use Illuminate\Support\Facades\Auth;
use App\Discussion;
use App\Profile;
use App\User;
use Session;


class DiscussionsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function posts($slug)
    {
        $user = Auth::user();
        $profile = Profile::where('user_id', $user->id)->first();
        $discussions = Discussion::where('profile_id', $profile->id)->paginate(4);
        $all_user_discussions = Discussion::where('profile_id', $profile->id)->count();
        $page_name = 'Discussion';

        return view('profile.discussions.index', compact('discussions', 'page_name', 'user', 'profile', 'all_user_discussions'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($slug)
    {      
        $user = User::where('slug', $slug)->first();
        $profile = Profile::where('user_id', $user->id)->first();
        $all_user_discussions = Discussion::where('profile_id', $profile->id)->count();
        $page_name = 'Create a discussion';

        return view('profile.discussions.create', compact('page_name', 'user', 'all_user_discussions'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(DiscussionRequest $request)
    {

        $file = $request->file('image');
        $name = time() . '-' . $file->getClientOriginalName();
        $file->move('images', $name);

        $user = Auth::user();
        $profile = Profile::where('user_id', $user->id)->first();

        $discussion = Discussion::create([
    
            'profile_id'    => $profile->id,
            'title'         => $request->title,
            'slug'          => str_slug($request->title, '-'),      
            'body'          => $request->body,            
            'image'         => $name,
            'status'        =>  $request->status,
  
       ]);   

        $discussion->save();
        $slug = $user->slug;
        $slug_d = $discussion->slug;
        $page_name = $discussion->title;

        Session::flash('success', 'Discussion successfully created!');
     
        return redirect()->route('profile.discussions.show', compact( 'page_name', 'slug', 'slug_d'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $discussion = Discussion::where('slug', $slug)->first();
        $page_name = $discussion->title;
        $total = 0;

        return view('profile.discussions.show', compact('discussion', 'page_name', 'total'));
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
