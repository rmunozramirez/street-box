<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Subcategory extends Model
{
	protected $fillable = [
			
		    'category_id',
		    'title',
		    'subtitle',	
            'slug',		    	    
		    'status',
		    'excerpt',
            'about_subcategory',		    
            'image',
            'is_featured',
            'in_menu',
	];

    public function category()
    {
        return $this->belongsTo('App\Category');
   	}


    public function chanels()
    {
        return $this->hasMany('App\Chanel');
    }
}
