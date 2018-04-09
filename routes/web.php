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
	Route::get('chanels', 'ChanelController@index')->name('chanels.index');
	Route::get('chanels/{slug}', 'ChanelController@show')->name('chanels.show')->where('slug', '[\w\d\-\_]+');

	//subcategories
	Route::get('subcategories', 'SubcategoriesController@index')->name('subcategories.index');
	Route::get('subcategories/{slug}', 'SubcategoriesController@show')->name('subcategories.show')->where('slug', '[\w\d\-\_]+');

	//categories

	Route::get('categories', 'CategoriesController@index')->name('categories.index');
	Route::get('categories/{slug}', 'CategoriesController@show')->name('categories.show')->where('slug', '[\w\d\-\_]+');

Route::group(['prefix' => 'admin', 'middleware' => 'auth'], function() {

	//admin
	Route::get('dashboard', 'AdminController@dashboard')->name('dashboard');

//Users
	//users
	Route::get('users', 'UserController@index')->name('users.index');
	Route::get('users/create', 'UserController@create')->name('users.create');
	Route::post('users/store', 'UserController@store')->name('users.store');
	Route::get('users/{slug}', 'UserController@show')->name('users.show')->where('slug', '[\w\d\-\_]+');
	Route::get('users/{slug}/edit', 'UserController@edit')->name('users.edit')->where('slug', '[\w\d\-\_]+');
	Route::patch('users/{slug}', 'UserController@update')->name('users.update')->where('slug', '[\w\d\-\_]+');
	Route::delete('users/{slug}', 'UserController@destroy')->name('users.destroy')->where('slug', '[\w\d\-\_]+');

//Blog
	//posts
	Route::get('posts/trashed', 'AdminPostsController@trashed')->name('posts.trashed');
	Route::get('posts/restore/{slug}', 'AdminPostsController@restore')->name('posts.restore');
	Route::get('posts/kill/{slug}', 'AdminPostsController@kill')->name('posts.kill');
	Route::resource('posts', 'AdminPostsController');

	//posttags
	Route::resource('posttags', 'PosttagController');

	//postcategories
	Route::get('postcategories/trashed', 'AdminPostsCategoriesController@trashed')->name('postcategories.trashed');
	Route::get('postcategories/restore/{slug}', 'AdminPostsCategoriesController@restore')->name('postcategories.restore');
	Route::get('postcategories/kill/{slug}', 'AdminPostsCategoriesController@kill')->name('postcategories.kill');
	Route::resource('postcategories', 'AdminPostsCategoriesController');

//Chanels
	//chanels
	Route::get('admin-chanels/trashed', 'AdminChanelController@trashed')->name('admin-chanels.trashed');
	Route::get('admin-chanels/restore/{slug}', 'AdminChanelController@restore')->name('admin-chanels.restore');
	Route::get('admin-chanels/kill/{slug}', 'AdminChanelController@kill')->name('admin-chanels.kill');
	Route::resource('admin-chanels', 'AdminChanelController');

	//subcategories
	Route::get('admin-subcategories/trashed', 'AdminSubcategoriesController@trashed')->name('admin-subcategories.trashed');
	Route::get('admin-subcategories/restore/{slug}', 'AdminSubcategoriesController@restore')->name('admin-subcategories.restore');
	Route::get('admin-subcategories/kill/{slug}', 'AdminSubcategoriesController@kill')->name('admin-subcategories.kill');
	Route::resource('admin-subcategories', 'AdminSubcategoriesController');

	//categories
	Route::get('admin-categories/trashed', 'AdminCategoriesController@trashed')->name('admin-categories.trashed');
	Route::get('admin-categories/restore/{slug}', 'AdminCategoriesController@restore')->name('admin-categories.restore');
	Route::get('admin-categories/kill/{slug}', 'AdminCategoriesController@kill')->name('admin-categories.kill');
	Route::resource('admin-categories', 'AdminCategoriesController');
});
