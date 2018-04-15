<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
	protected $fillable = [

        'reply_id',
        'profile_id',		    
    
	];


    public function reply()
    {
        return $this->belongsTo('App\Reply');
    }

    public function profile()
    {
        return $this->belongsTo('App\Profile');
    }


}
