<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Page extends Model
{
	protected $fillable = [			

		    'title',
            'slug',		    
		    'subtitle',
		    'excerpt',
            'body',		    
            'image',
            'status_id',
               
	];

    use SoftDeletes;
    protected $dates = ['deleted_at'];

    
    public function status()
    {
        return $this->belongsTo('App\Status');
   	}

}