<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Status extends Model
{

    public function chanels()
    {
        return $this->hasMany('App\Chanel');
    }

    public function profiles()
    {
        return $this->hasMany('App\Profile');
    }

    public function categories()
    {
        return $this->hasMany('App\Category');
    }

    public function discussions()
    {
        return $this->hasMany('App\Discussion');
    }

    public function pages()
    {
        return $this->hasMany('App\Page');
    }

}
