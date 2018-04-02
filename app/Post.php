<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

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

    public function postcategory()
    {
        return $this->belongsTo('App\Postcategory');
   	}

}
