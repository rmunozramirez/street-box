<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Postcategory extends Model
{
	protected $fillable = [
			
			'status',
		    'title',
            'slug',		    
		    'subtitle',
		    'excerpt',
            'about_category',
            'is_featured',
            'in_menu',
			'image',
	];

    public function posts()
    {
        return $this->hasMany('App\Post');
    }


}
