<?php

use Illuminate\Database\Seeder;

class CategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	
		 App\Category::create ([
        	'title' 			=> 	'Category One',
        	'subtitle' 			=> 	'Subtitle Category One',
        	'slug'				=>	'category-one',
        	'excerpt'			=>	'This is the excerpt of the Category one',
        	'about_category'	=>	'This is the description of the Category one',
        	'status'			=>	'active',
        	'image'				=>	'bmw.jpg',
        	'is_featured'		=>	'1',
        	'in_menu'			=>	'1',
        ]);    	

		 App\Category::create ([
        	'title' 			=> 	'Category Two',
        	'subtitle' 			=> 	'Subtitle Category Two',
        	'slug'				=>	'category-two',
        	'excerpt'			=>	'This is the excerpt of the Category Two',
        	'about_category'	=>	'This is the description of the Category Two',
        	'status'			=>	'active',
        	'image'				=>	'concerto.jpg',
        	'is_featured'		=>	'1',
        	'in_menu'			=>	'1',
        ]);    	

         App\Category::create ([
            'title'             =>  'Category Three',
            'subtitle'          =>  'Subtitle Category Three',
            'slug'              =>  'category-three',
            'excerpt'           =>  'This is the excerpt of the Category Three',
            'about_category'    =>  'This is the description of the Category Three',
            'status'            =>  'inactive',
            'image'             =>  'cha-cha-cha.jpg',
            'is_featured'       =>  '0',
            'in_menu'           =>  '0',
        ]);

         App\Category::create ([
            'title'             =>  'Category Four',
            'subtitle'          =>  'Subtitle Category Four',
            'slug'              =>  'category-four',
            'excerpt'           =>  'This is the excerpt of the Category Four',
            'about_category'    =>  'This is the description of the Category Four',
            'status'            =>  'inactive',
            'image'             =>  'bolliwood.jpg',
            'is_featured'       =>  '0',
            'in_menu'           =>  '0',
        ]);

		 App\Category::create ([
        	'title' 			=> 	'Category Five',
        	'subtitle' 			=> 	'Subtitle Category Five',
        	'slug'				=>	'category-five',
        	'excerpt'			=>	'This is the excerpt of the Category Five',
        	'about_category'	=>	'This is the description of the Category Five',
        	'status'			=>	'inactive',
        	'image'				=>	'berlin.jpg',
        	'is_featured'		=>	'0',
        	'in_menu'			=>	'0',
        ]);

    }
}
