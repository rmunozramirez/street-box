<?php

use Illuminate\Database\Seeder;

class PosttagTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

	 App\Posttag::create ([
        	'name' 	=> 	'Dance',
        	'slug'	=>	'dance',
        ]); 

	 App\Posttag::create ([
        	'name' 	=> 	'Artes plasticas',
        	'slug'	=>	'artes-plasticas',
        ]); 

	 App\Posttag::create ([
        	'name' 	=> 	'Theather',
        	'slug'	=>	'theather',
        ]);

	 App\Posttag::create ([
        	'name' 	=> 	'Music',
        	'slug'	=>	'music',
        ]);    	

    }
}
