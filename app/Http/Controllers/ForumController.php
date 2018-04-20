<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ReplyRequest;
use Illuminate\Support\Facades\Auth;
use App\Discussion;
use App\Profile;
use App\User;
use App\Like;
use App\Reply;
use Session;

class ForumController extends Controller
{

    public function index()
    {
        // $user = Auth::user();
        // $profile = Profile::where('user_id', $user->id)->first();
        $discussions = Discussion::paginate(4);
        $all_discussions = Discussion::count();
        $page_name = 'Forum
        ';

        return view('forum.index', compact('discussions', 'page_name', 'all_discussions'));
    }

    public function show($slug)
    {
        $discussion = Discussion::where('slug', $slug)->first();
        // $user = Auth::user();
        // $profile = Profile::where('user_id', $user->id)->first();
        $all_user_discussions = Discussion::all();
        $page_name = $discussion->title;

        return view('forum.show', compact('discussion', 'page_name'));
    }

    public function reply(ReplyRequest $request, $slug)
    {
        
        $discussion = Discussion::where('slug', $slug)->first();
        $page_name = $discussion->title;
        $user = Auth::user();       
        if ($user != null) {
            $profile = Profile::where('user_id', $user->id)->first();
            $all_user_discussions = Discussion::where('profile_id', $profile->id)->count();

             $reply = Reply::create([

                'profile_id'    => $user->profile->id,
                'discussion_id' => $discussion->id,
                'body'          =>   $request->body,

            ]);
          } else {
            
            Session::flash('success', 'You have to be registered to reply in forum!');
            return view('forum.show', compact('discussion', 'page_name'));
          }


        Session::flash('success', 'Answer successfully created!');
        return view('forum.show', compact('discussion', 'user',  'page_name', 'all_user_discussions', 'slug'));
    }

    public function like($id)
    {
        $reply = Reply::find($id);
        $profile_id = Auth::user()->profile->id;

        Like::create([
            'reply_id'      => $id,
            'profile_id'    => $profile_id,
        ]);

        Session::flash('success', 'Reply Liked!');
        return redirect()->back();
    }

    public function unlike($id)
    {
        $user = Auth::user();
        $profile = Profile::where('user_id', $user->id)->first();
        $like = Like::where('reply_id', $id)->where('profile_id', $profile->id)->first();

        $like->delete();

        Session::flash('success', 'Reply Unliked!');
        return redirect()->back();
    }

}
