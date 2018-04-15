<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Profile extends Model
{

   protected $fillable = [
        'user_id',
        'birthday', 
        'about_user',
        'image',
        'status',
    ];

	use SoftDeletes;
    protected $dates = ['deleted_at'];

    public function user()
    {
        return $this->belongsTo('App\User');
    } 


    public function discussions()
    {
        return $this->hasMany('App\Discussion');
    }

    public function replies()
    {
        return $this->hasMany('App\Reply');
    }

    public function chanel()
    {
        return $this->hasOne('App\Chanel');
    } 


    public function likes()
    {
        return $this->hasMany('App\Like');
    }


}
