<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Page extends Model
{
	protected $fillable = [			
			'status',
		    'title',
            'slug',		    
		    'subtitle',
		    'excerpt',
            'body',		    
            'image',
	];

    use SoftDeletes;
    protected $dates = ['deleted_at'];

}