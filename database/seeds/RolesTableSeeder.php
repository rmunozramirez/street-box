<?php

use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         App\Role::create ([
            'name'  =>  'Admin',
            'slug'  =>  'admin',
        ]);   
                
         App\Role::create ([
            'name'  =>  'Author',
            'slug'  =>  'author',
        ]);   
                
		 App\Role::create ([
            'name'  =>  'Subscriber',
        	'slug'  => 	'subscriber',
        ]);   
         
    }
}
