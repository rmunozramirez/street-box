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

//user 1
        App\User::create ([
            'name'      =>  'Rafael Muñoz',
            'email'     =>  'rafaelmunoznl@yahoo.com',
            'password'  =>  bcrypt('Password'),
            'role_id'   =>  1,
            'slug'      =>  'rafael-munoz',
        ]);

        App\Profile::create ([
            'user_id'   =>  1,
        ]);

//user 2
        App\User::create ([
            'name'      =>  'Enrique (Kike) Muñoz Botschka',
            'email'     =>  'kike901@gmail.com',
            'password'  =>  bcrypt('Password'),
            'role_id'   =>  1,
            'slug'      =>  'enrique-kike-munoz-botschka',
        ]);

        App\Profile::create ([
            'user_id'   =>  2,
        ]);

//user 3
        App\User::create ([
            'name'      =>  'Amelie Muñoz Botschka',
            'email'     =>  'amelie@yahoo.com',
            'password'  =>  bcrypt('Password'),
            'role_id'   =>  2,
            'slug'      =>  'amelie-munoz-botschka',
        ]);

        App\Profile::create ([
            'user_id'  =>   3,
        ]);

//user 4
        App\User::create ([
            'name'      =>  'Pamela Rodriguez',
            'email'     =>  'prdguez@yahoo.com',
            'password'  =>  bcrypt('Password'),
            'role_id'   =>  2,
            'slug'      =>  'pamela-rodriguez',
        ]);

        App\Profile::create ([
            'user_id'  =>   4,
        ]);

//user 5 
        App\User::create ([
            'name'      =>  'Arnaldo Schmidth',
            'email'     =>  'a.schmidth@smidth-and-sons.com',
            'password'  =>  bcrypt('Password'),
            'role_id'   =>  3,
            'slug'      =>  'arnaldo-schmidth',
        ]);

        App\Profile::create ([
            'user_id'  =>   5,
        ]);

//user 6   
        App\User::create ([
            'name'      =>  'Miguel Strogov',
            'email'     =>  'mstrogov@stroganov.ru',
            'password'  =>  bcrypt('Password'),
            'role_id'   =>  3,
            'slug'      =>  'miguel-strogov',
        ]);

        App\Profile::create ([
            'user_id'  =>   6,
        ]);

//user 7
        App\User::create ([
            'name'      =>  'Tom Lee',
            'email'     =>  't.lee@lee.cn',
            'password'  =>  bcrypt('Password'),
            'role_id'   =>  3,
            'slug'      =>  'tom-lee',
        ]);

        App\Profile::create ([
        	'user_id'  => 	7,
        ]);
        
    }
}
