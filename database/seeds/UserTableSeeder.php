<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\User::create ([
            'name'      =>  'Rafael Muñoz',
            'email'     =>  'rafaelmunoznl@yahoo.com',
            'password'  =>  bcrypt('Password'),
            'role_id'   =>  1,

        ]);

        App\User::create ([
            'name'      =>  'Enrique (Kike) Muñoz Botschka',
            'email'     =>  'kike901@gmail.com',
            'password'  =>  bcrypt('Password'),
            'role_id'   =>  2,

        ]);

        App\User::create ([
        	'name' 		=> 	'Amelie Muñoz Botschka',
        	'email'		=>	'amelie@yahoo.com',
        	'password'	=>	bcrypt('Password'),
            'role_id'   =>  3,

        ]);
    }
}
