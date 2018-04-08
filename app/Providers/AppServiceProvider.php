<?php
namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\View;
use Carbon\Carbon;
use App\Chanel;
use App\Subcategory;
use App\Category;
use App\Post;
use App\Posttag;
use App\Postcategory;
use App\User;
use App\Role;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {

        $all_chanels = Chanel::all();
        $all_subcategories = Subcategory::pluck('title', 'id')->all();
        $all_categories = Category::orderBy('title', 'asc')->pluck('title', 'id')->all();
        $all_postcategories = Postcategory::pluck('title', 'id')->all();
        $all_posts = Post::all();
        $all_posttags = Posttag::pluck('name', 'id')->all(); 
        $all_users = User::all();
        $all_roles = Role::pluck('name', 'id')->all();
        $page_name = 'App';
        View::share(array('all_chanels' => $all_chanels, 
                            'all_subcategories' => $all_subcategories,
                            'all_categories' => $all_categories,
                            'all_page_name' =>  $page_name,
                            'all_postcategories' =>  $all_postcategories,
                            'all_posts' =>  $all_posts,
                            'all_posttags' =>  $all_posttags,
                            'all_users' =>  $all_users,
                            'all_roles' =>  $all_roles,
                        ));
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
