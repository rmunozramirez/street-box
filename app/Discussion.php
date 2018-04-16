<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Discussion extends Model
{
	protected $fillable = [

            'profile_id',
			'status',
		    'title',
            'slug',		    
		    'body',	    
            'image',
            'likes',
			'is_testimonial',

	];

	use SoftDeletes;
    protected $dates = ['deleted_at'];

    public function profile()
    {
        return $this->belongsTo('App\Profile');
   	}

    public function replies()
    {
        return $this->hasMany('App\Reply');
    }

    public function likes()
    {
        return $this->hasManyThrough('App\Post', 'App\Like');
    }
}
