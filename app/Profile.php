<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Profile extends Model
{

   protected $fillable = [
        'user_id',
        'chanel_id',
        'slug',
        'first_name',  
        'last_name',
        'birthday', 
        'about_user',
        'image',
    ];

	use SoftDeletes;
    protected $dates = ['deleted_at'];

    public function user()
    {
        return $this->belongsTo('App\User');
    } 
}
