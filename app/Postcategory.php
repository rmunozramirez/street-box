<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Postcategory extends Model
{
	protected $fillable = [
        
		    'title',
            'slug',		    
		    'subtitle',
		    'excerpt',
            'about_category',
            'status_id',
			'image',
	];

    use SoftDeletes;
    protected $dates = ['deleted_at'];

    public function posts()
    {
        return $this->hasMany('App\Post');
    }

    public function status()
    {
        return $this->belongsTo('App\Status');
    }
}
