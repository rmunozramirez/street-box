<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
	protected $fillable = [

		    'title',
            'slug',		
		    'subtitle',   
		    'excerpt',	
            'about_category',
			'image',
            'status_id',
            
	];

    use SoftDeletes;
    protected $dates = ['deleted_at'];

    public function subcategories()
    {
        return $this->hasMany('App\Subcategory');
    }

    function chanels()
    {
        return $this->hasManyThrough('App\Chanel', 'App\Subcategory', 'category_id', 'subcategory_id');
    }

    public function status()
    {
        return $this->belongsTo('App\Status');
    }

}
