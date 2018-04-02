<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Chanel extends Model
{

	protected $fillable = [
			
			'subcategory_id',
			'status',
		    'title',
            'slug',		    
		    'subtitle',
		    'excerpt',
            'about_channel',		    
            'image',
            'video',
            'is_featured',
            'likes',
			'is_testimonial',            
			'web',
			'facebook',
			'googleplus',
			'twitter',
			'linkedin',
			'youtube',
	];

    public function subcategory()
    {
        return $this->belongsTo('App\Subcategory');
   	}
            
}
