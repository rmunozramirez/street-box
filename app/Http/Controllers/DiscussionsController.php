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

    public function index($slug)
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
            'status_id'         => $request->status_id,
            'title'         => $request->title,
            'slug'          => str_slug($request->title, '-'),      
            'body'          => $request->body,            
            'image'         => $name,
  
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
    public function show($slug, $slug_d)
    {
        $discussion = Discussion::where('slug', $slug_d)->first();
        $user = Auth::user();
        $profile = Profile::where('user_id', $user->id)->first();
        $all_user_discussions = Discussion::where('profile_id', $profile->id)->count();
        $page_name = $discussion->title;

        return view('profile.discussions.show', compact('discussion', 'page_name', 'all_user_discussions', 'user'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($slug, $slug_d)
    {
        $discussion = Discussion::where('slug', $slug_d)->first();
        $user = Auth::user();
        $profile = Profile::where('user_id', $user->id)->first();
        $all_user_discussions = Discussion::where('profile_id', $profile->id)->count();
        $page_name = 'Edit: ' . $discussion->title;

        return view('profile.discussions.edit', compact('discussion', 'page_name', 'user', 'all_user_discussions'));

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(DiscussionRequest $request, $slug_d)
    {

        $input = $request->all();
        $input['slug'] = str_slug($request->title, '-');

        if ( $file = $request->file('image')) {
            $name = time() . '-' . $file->getClientOriginalName();
            $file->move('images', $name);
            $input['image'] = $name;
        }

        $discussion = Discussion::where('slug', $slug_d)->first();
        $discussion->fill($input)->save();
        $page_name = $discussion->title;
        $slug = Auth::user()->slug;
        $slug_d = $discussion->slug;

        Session::flash('success', 'Discussion successfully updated!');
     
        return redirect()->route('profile.discussions.show', compact('slug', 'slug_d'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($slug, $slug_d)
    {

        $discussion = Discussion::where('slug', $slug_d)->first();
        $user = Auth::user();
        $discussion->delete();

        Session::flash('success', 'Discussion successfully deleted!');

        return redirect()->route('profile.discussions.index', $user->slug);
    }

    public function trashed($slug)
    {
        $user = Auth::user();
        $profile = Profile::where('user_id', $user->id)->first();
        $discussions = Discussion::where('profile_id', $profile->id)->onlyTrashed()->paginate(4);
        $all_user_discussions = Discussion::where('profile_id', $profile->id)->count();
        $page_name = 'Trashed discussion';

        return view('profile.discussions.trashed', compact('discussions', 'user', 'slug', 'all_user_discussions','page_name'));
    }

    public function restore($slug, $slug_d)
    {
        $discussion = Discussion::withTrashed()->where('slug', $slug_d)->first();
        $discussion->restore();

        Session::flash('success', 'Discussion successfully restored!');
        return redirect()->route('profile.discussions.trashed', $slug);
    }

    public function kill($slug, $slug_d)
    {
        $discussion = Discussion::withTrashed()->where('slug', $slug_d)->first();
        if ($discussion != null) {
            $discussion->forceDelete();
        } else {
            $user = Auth::user();
            Session::flash('info', 'Discussion does not exist!');
            return redirect()->route('profile.discussions.index', compact('user'));
        }

        Session::flash('success', 'Discussion pemanently deleted!');
        return redirect()->route('profile.discussions.trashed', $slug);
    }

    public static  function all_likes($id) {

        $user = User::find($id);
        $profile = Profile::where('user_id', $user->id);
        $discussions = Discussion::where('profile_id', $profile->id)->get();
        $replies = array();
        $all_likes = "";
        foreach ($discussions as $discussion) {
            foreach ($discussion->replies as $reply) {
                $all_likes = $all_likes + count($reply->likes);
            }
        }

        return $all_likes;
    } 

}
