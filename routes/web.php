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

	//news
	Route::get('news', 'PostsController@index')->name('news.index');
	Route::get('news/{slug}', 'PostsController@show')->name('news.show')->where('slug', '[\w\d\-\_]+');

	//postcategories
	Route::get('newscategories', 'PostcategoriesController@index')->name('newscategories.index');
	Route::get('newscategories/{slug}', 'PostcategoriesController@show')->name('newscategories.show')->where('slug', '[\w\d\-\_]+');


	//chanels
	Route::get('chanels/trashed', 'ChanelController@trashed')->name('chanels.trashed');
	Route::get('chanels/restore/{slug}', 'ChanelController@restore')->name('chanels.restore');
	Route::get('chanels/kill/{slug}', 'ChanelController@kill')->name('chanels.kill');
	Route::resource('chanels', 'ChanelController');

	//subcategories
	Route::get('subcategories/trashed', 'SubcategoriesController@trashed')->name('subcategories.trashed');
	Route::get('subcategories/restore/{slug}', 'SubcategoriesController@restore')->name('subcategories.restore');
	Route::get('subcategories/kill/{slug}', 'SubcategoriesController@kill')->name('subcategories.kill');
	Route::resource('subcategories', 'SubcategoriesController');

	//categories
	Route::get('categories/trashed', 'CategoriesController@trashed')->name('categories.trashed');
	Route::get('categories/restore/{slug}', 'CategoriesController@restore')->name('categories.restore');
	Route::get('categories/kill/{slug}', 'CategoriesController@kill')->name('categories.kill');
	Route::resource('categories', 'CategoriesController');


Route::group(['prefix' => 'admin', 'middleware' => 'auth'], function() {

	//admin
	Route::get('dashboard', 'AdminController@dashboard')->name('dashboard');

	//posttags
	Route::resource('posttags', 'PosttagController');

	//users
	Route::resource('users', 'UserController');

	//posts
	Route::get('posts/trashed', 'AdminPostsController@trashed')->name('posts.trashed');
	Route::get('posts/restore/{slug}', 'AdminPostsController@restore')->name('posts.restore');
	Route::get('posts/kill/{slug}', 'AdminPostsController@kill')->name('posts.kill');
	Route::resource('posts', 'AdminPostsController');


	//postcategories
	Route::get('postcategories/trashed', 'AdminPostsCategoriesController@trashed')->name('postcategories.trashed');
	Route::get('postcategories/restore/{slug}', 'AdminPostsCategoriesController@restore')->name('postcategories.restore');
	Route::get('postcategories/kill/{slug}', 'AdminPostsCategoriesController@kill')->name('postcategories.kill');
	Route::resource('postcategories', 'AdminPostsCategoriesController');
});
