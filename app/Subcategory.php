<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Subcategory extends Model
{
	protected $fillable = [
			
		    'category_id',
		    'title',
		    'subtitle',	
            'slug',
		    'excerpt',
            'about_subcategory',		    
            'image',
            'status_id',
	];

    use SoftDeletes;
    protected $dates = ['deleted_at'];

    public function category()
    {
        return $this->belongsTo('App\Category');
   	}


    public function chanels()
    {
        return $this->hasMany('App\Chanel');
    }
}
