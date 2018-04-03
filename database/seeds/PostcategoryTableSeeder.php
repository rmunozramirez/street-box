<?php

use Illuminate\Database\Seeder;

class PostcategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	
		 App\Postcategory::create ([
            
        	'title' 			=> 	'Postcategory One',
        	'subtitle' 			=> 	'Subtitle Category One',
        	'slug'				=>	'postcategory-one',
        	'excerpt'			=>	'This is the excerpt of the Category one',
        	'about_category'	=>	'This is the description of the Category one',
        	'status'			=>	'active',
        	'image'				=>	'bmw.jpg',
        	'is_featured'		=>	'1',
        	'in_menu'			=>	'1',
        ]);    	


		 App\Postcategory::create ([

        	'title' 			=> 	'Postcategory Two',
        	'subtitle' 			=> 	'Subtitle Category Two',
        	'slug'				=>	'postcategory-two',
        	'excerpt'			=>	'This is the excerpt of the Category Two',
        	'about_category'	=>	'This is the description of the Category Two',
        	'status'			=>	'active',
        	'image'				=>	'bolliwood.jpg',
        	'is_featured'		=>	'1',
        	'in_menu'			=>	'1',
        ]);    	

		 App\Postcategory::create ([

        	'title' 			=> 	'Postcategory Three',
        	'subtitle' 			=> 	'Subtitle Category Three',
        	'slug'				=>	'postcategory-three',
        	'excerpt'			=>	'This is the excerpt of the Category Three',
        	'about_category'	=>	'This is the description of the Category Three',
        	'status'			=>	'inactive',
        	'image'				=>	'concerto.jpg',
        	'is_featured'		=>	'0',
        	'in_menu'			=>	'0',
        ]);

    }
}
