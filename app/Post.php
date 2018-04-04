<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{
	protected $fillable = [
			
			'status',
		    'title',
            'slug',		    
		    'subtitle',
		    'excerpt',
            'body',		    
            'image',
            'is_featured',
            'likes',
			'postcategory_id' 
	];

    use SoftDeletes;
    protected $dates = ['deleted_at'];

    public function postcategory()
    {
        return $this->belongsTo('App\Postcategory');
   	}

}
