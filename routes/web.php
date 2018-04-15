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

//Guest Sections
	Route::get('forum/{id}/like', 'ForumController@like')->name('forum.like');
	Route::get('forum/{id}/unlike', 'ForumController@unlike')->name('forum.unlike');
	Route::post('forum/{slug}', 'ForumController@reply')->name('forum.reply');
	Route::resource('forum', 'ForumController');

	//news
	Route::resource('news', 'PostsController');

	//pages
	Route::get('pages/{slug}', 'PagesController@show')->name('pages.show');

	//postcategories
	Route::resource('newscategories', 'PostcategoriesController');

	//chanels
	Route::resource('chanels', 'ChanelController@');

	//subcategories
	Route::resource('subcategories', 'SubcategoriesController');

	//categories
	Route::resource('categories', 'CategoriesController');

//Profile Sections
	Route::get('profile/{slug}', 'ProfileController@home')
	->name('profile.home');
	Route::patch('profile/{slug}', 'ProfileController@updateuser')
	->name('profile.updateuser');

	Route::get('profile/{slug}/persona', 'ProfileController@persona')
	->name('profile.persona');
	Route::get('profile/{slug}/persona/edit', 'ProfileController@update')
	->name('profile.persona.edit');

//Profile discussions
	Route::get('profile/{slug}/discussions', 'DiscussionsController@index')
	->name('profile.discussions.index');
	Route::get('profile/{slug}/discussions/create', 'DiscussionsController@create')
	->name('profile.discussions.create');
	Route::get('profile/{slug}/discussions/{slug_d}', 'DiscussionsController@show')
	->name('profile.discussions.show');
	Route::get('profile/{slug}/discussions/{slug_d}/edit', 'DiscussionsController@edit')
	->name('profile.discussions.edit');
	Route::patch('profile/{slug}/discussions/{slug_d}', 'DiscussionsController@update')
	->name('profile.discussions.update');
	Route::delete('profile/{slug}/discussions/{slug_d}', 'DiscussionsController@destroy')
	->name('profile.discussions.destroy');
	Route::get('profile/{slug}/discussions/trashed/all', 'DiscussionsController@trashed')
	->name('profile.discussions.trashed');
	Route::get('profile/{slug}/discussions/{slug_d}/restore', 'DiscussionsController@restore')
	->name('profile.discussions.restore');
	Route::get('profile/{slug}/discussions/{slug_d}/kill', 'DiscussionsController@kill')
	->name('profile.discussions.kill');	
	Route::resource('discussions', 'DiscussionsController');


Route::group(['prefix' => 'admin', 'middleware' => 'auth'], function() {

	//admin
	Route::get('dashboard', 'AdminController@dashboard')->name('dashboard');

//Users
	//users
	Route::resource('users', 'UserController');

	//profiles
	Route::get('admin-profiles/trashed', 'AdminProfileController@trashed')->name('admin-profiles.trashed');
	Route::get('admin-profiles/restore/{slug}', 'AdminProfileController@restore')->name('admin-profiles.restore');
	Route::get('admin-profiles/kill/{slug}', 'AdminProfileController@kill')->name('admin-profiles.kill');
	Route::resource('admin-profiles', 'AdminProfileController');

//Blog
	//posts
	Route::get('posts/trashed', 'AdminPostsController@trashed')->name('posts.trashed');
	Route::get('posts/restore/{slug}', 'AdminPostsController@restore')->name('posts.restore');
	Route::get('posts/kill/{slug}', 'AdminPostsController@kill')->name('posts.kill');
	Route::resource('posts', 'AdminPostsController');

	//posttags
	Route::resource('posttags', 'PosttagController');

	//pages
	Route::get('admin-pages/trashed', 'AdminPagesController@trashed')->name('admin-pages.trashed');
	Route::get('admin-pages/restore/{slug}', 'AdminPagesController@restore')->name('admin-pages.restore');
	Route::get('admin-pages/kill/{slug}', 'AdminPagesController@kill')->name('admin-pages.kill');
	Route::resource('admin-pages', 'AdminPagesController');

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
