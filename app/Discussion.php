<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Discussion extends Model
{
	protected $fillable = [

            'profile_id',
		    'title',
            'slug',		    
		    'body',	    
            'image',
            'likes',
            'status_id',
            
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
        return $this->hasManyThrough('App\Reply', 'App\Like');
    }

    public function status()
    {
        return $this->belongsTo('App\Status');
    }
}
