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


Route::get('/', 'HomeController@landing');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

	//posts
	Route::get('posts/trashed', 'PostsController@trashed')->name('posts.trashed');
	Route::get('posts/restore/{slug}', 'PostsController@restore')->name('posts.restore');
	Route::get('posts/kill/{slug}', 'PostsController@kill')->name('posts.kill');
	Route::resource('posts', 'PostsController');

	//postcategories
	Route::get('postcategories/trashed', 'PostcategoriesController@trashed')->name('postcategories.trashed');
	Route::get('postcategories/restore/{slug}', 'PostcategoriesController@restore')->name('postcategories.restore');
	Route::get('postcategories/kill/{slug}', 'PostcategoriesController@kill')->name('postcategories.kill');
	Route::resource('postcategories', 'PostcategoriesController');

	//chanels
	Route::get('chanels/trashed', 'ChanelController@trashed')->name('chanels.trashed');
	Route::get('chanels/restore/{slug}', 'ChanelController@restore')->name('chanels.restore');
	Route::get('chanels/kill/{slug}', 'ChanelController@kill')->name('chanels.kill');
	Route::resource('chanels', 'ChanelController');

	//subcategories
	Route::resource('subcategories', 'SubcategoriesController');

	//categories
	Route::resource('categories', 'CategoriesController');


