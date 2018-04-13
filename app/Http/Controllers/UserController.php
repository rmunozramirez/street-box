<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Role;
use Session;


class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::orderBy('created_at', 'asc')->paginate(4);
        $total = User::all();
        $page_name = 'User';
        $roles = Role::all();

        return view('admin.users.index', compact('users', 'total', 'page_name', 'roles'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

        $users = User::pluck('name', 'slug')->all();
        $page_name =  'Create a new User';

        return view('admin.users.create', compact('users', 'page_name'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $user = User::create([
            'name'      =>  $request->name,
            'email'     =>  $request->email,
            'role_id'   =>  $request->role_id,
            'slug'      => str_slug($request->name, '-'),
        ]);        


        $user->save();

        $profile = Profile::create([
            'user_id' => $user->id,
        ]);

        Session::flash('success', 'User successfully created!');
     
        return redirect()->route('users.show', $user->slug);
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
        $page_name = $user->name;

        return view('admin.users.show', compact('user', 'page_name', 'total'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($slug)
    {
        $user = User::where('slug', $slug)->first();
        $page_name = 'Edit: ' . $user->name;

        return view('admin.users.edit', compact('user', 'page_name'));

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $slug)
    {
        
        $input = $request->all();
        if ($request->password) { 
            $input['password'] = bcrypt($request->password);
        }

        if ($request->name) { 
            $input['name'] =$request->name;
        }
        $input['slug'] = str_slug($request->name, '-');

        $user = User::where('slug', $slug)->first();
        $user->fill($input)->save();
        $page_name = $user;

        Session::flash('success', 'User successfully updated!');
     
        return redirect()->route('users.show', $user->slug);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($slug)
    {
        $user = User::where('slug', $slug)->first();
        $user->delete();

        Session::flash('success', 'User successfully deleted!');
        return redirect()->route('users.index');
    }
}
