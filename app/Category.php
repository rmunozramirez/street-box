<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
	protected $fillable = [

		    'title',
            'slug',		
		    'subtitle',   
		    'excerpt',	
            'about_category',		    	             	    			
			'status',
			'image',
            'is_featured',
            'in_menu',
	];

    public function subcategories()
    {
        return $this->hasMany('App\Subcategory');
    }

    function chanels()
    {
        return $this->hasManyThrough('App\Chanel', 'App\Subcategory');
    }

}
