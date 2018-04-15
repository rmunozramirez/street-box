<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Reply extends Model
{
	protected $fillable = [

        'user_id',
        'discussion_id',
        'profile_id',		    
	    'body',	    

	];

    public function discussion()
    {
        return $this->belongsTo('App\Discussion');
   	}
   	
    public function profile()
    {
        return $this->belongsTo('App\Profile');
   	}

    public function likes()
    {
        return $this->hasMany('App\Like');
    }

    public function is_like_by_auth_user(){
        $id = Auth::id();
        $likers = array();

        foreach ($this->likes as $like) {
            array_push($likers, $like->profile_id);
        }

        if (in_array($id, $likers)) {
            return true;
        } else {
            return false;
        }

    }


}
