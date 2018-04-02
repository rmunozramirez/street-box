<?php
namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\View;
use Carbon\Carbon;
use App\Chanel;
use App\Subcategory;
use App\Category;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {

        $all_chanels = Category::withCount(['subcategories', 'chanels'])->get();
        $subcategories = Subcategory::all();
        $categories = Category::all();
        View::share(array('all_chanels' => $all_chanels, 
                            'subcategories' => $subcategories,
                            'categories' => $categories,
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
