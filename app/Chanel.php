<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Chanel extends Model
{
	protected $fillable = [
			
			'subcategory_id',
            'profile_id',
			'status_id',
		    'title',
            'slug',		    
		    'subtitle',
		    'excerpt',
            'about_chanel',		    
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

	use SoftDeletes;
    protected $dates = ['deleted_at'];

    public function subcategory()
    {
        return $this->belongsTo('App\Subcategory');
   	}

    public function profile()
    {
        return $this->belongsTo('App\Profile');
    }

    public function status()
    {
        return $this->belongsTo('App\Status');
   	}
  
}
