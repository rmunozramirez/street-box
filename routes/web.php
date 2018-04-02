<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
		$page_name = 'Home page';
        return view('welcome', compact('page_name'));
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

	//posts
	Route::resource('posts', 'PostsController');
	Route::get('posts/year/{year}', 'PostsController@year')->name('posts.year');

	//postcategories	
	Route::resource('postcategories', 'PostcategoriesController');

	//chanels
	Route::resource('chanels', 'ChanelController');

	//subcategories
	Route::resource('subcategories', 'SubcategoriesController');

	//categories
	Route::resource('categories', 'CategoriesController');


