<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Discussion;
use App\Profile;
use App\User;
use Session;

class ForumController extends Controller
{

    public function index()
    {
        $user = Auth::user();
        $profile = Profile::where('user_id', $user->id)->first();
        $discussions = Discussion::paginate(4);
        $all_discussions = Discussion::count();
        $page_name = 'Forum
        ';

        return view('forum.index', compact('discussions', 'page_name', 'user', 'profile', 'all_discussions'));
    }


    public function show($slug)
    {
        $discussion = Discussion::where('slug', $slug)->first();
        $user = Auth::user();
        $profile = Profile::where('user_id', $user->id)->first();
        $all_user_discussions = Discussion::where('profile_id', $profile->id)->count();
        $page_name = $discussion->title;

        return view('forum.show', compact('discussion', 'page_name', 'all_user_discussions', 'user'));
    }

}
