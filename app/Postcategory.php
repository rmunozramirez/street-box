<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Postcategory extends Model
{
	protected $fillable = [
			
			'status',
		    'title',
            'slug',		    
		    'subtitle',
		    'excerpt',
            'about_category',
            'is_featured',
            'in_menu',
			'image',
	];

    use SoftDeletes;
    protected $dates = ['deleted_at'];

    public function posts()
    {
        return $this->hasMany('App\Post');
    }


}
