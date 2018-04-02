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
use App\Postcategory;

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
        $all_categories = Category::all();
        $all_postcategories = Postcategory::all();
        $all_posts = Post::all();
        $page_name = 'App';
        View::share(array('all_chanels' => $all_chanels, 
                            'all_subcategories' => $all_subcategories,
                            'all_categories' => $all_categories,
                            'all_page_name' =>  $page_name,
                            'all_postcategories' =>  $all_postcategories,
                            'all_posts' =>  $all_posts,
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
