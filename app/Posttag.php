<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Posttag extends Model
{

	protected $fillable = [
			
		    'name',
            'slug',
            	    
	];

    public function Post()
    {
        return $this->belongsToMany('App\Post');
    } 
}
