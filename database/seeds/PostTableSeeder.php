<?php

use Illuminate\Database\Seeder;

class PostTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
		 App\Post::create ([
        	'title' 			=> 	'Post One',
        	'subtitle' 			=> 	'Subtitle Category One',
        	'slug'				=>	'post-one',
        	'excerpt'			=>	'This is the excerpt of the Category one',
        	'postcategory_id'	=>	'1',
        	'body'				=>	'This is the description of the Category one',
        	'image'				=>	'bmw.jpg',
        	'is_featured'		=>	'1',
        	'likes'				=>	'1',
        	'status'			=>	'published',
        ]);   
        
		 App\Post::create ([
        	'title' 			=> 	'Post Two',
        	'subtitle' 			=> 	'Subtitle Post Two',
        	'slug'				=>	'post-two',
        	'excerpt'			=>	'This is the excerpt of the Category TwoTwo',
        	'postcategory_id'	=>	'2',
        	'body'				=>	'This is the description of the Category Two',
        	'image'				=>	'berlin.jpg',
        	'is_featured'		=>	'1',
        	'likes'				=>	'1',
        	'status'			=>	'published',
        ]);   
        
		 App\Post::create ([
        	'title' 			=> 	'Post Three',
        	'subtitle' 			=> 	'Subtitle Category Three',
        	'slug'				=>	'post-three',
        	'excerpt'			=>	'This is the excerpt of the Category ThreeThree',
        	'postcategory_id'	=>	'2',
        	'body'				=>	'This is the description of the Category Three',
        	'image'				=>	'cha-cha-cha.jpg',
        	'is_featured'		=>	'1',
        	'likes'				=>	'1',
        	'status'			=>	'published',
        ]);   
        
		 App\Post::create ([
        	'title' 			=> 	'Post Four',
        	'subtitle' 			=> 	'Subtitle Category One',
        	'slug'				=>	'post-four',
        	'excerpt'			=>	'This is the excerpt of the Category Four',
        	'postcategory_id'	=>	'1',
        	'body'				=>	'This is the description of the Category Four',
        	'image'				=>	'concert.jpg',
        	'is_featured'		=>	'3',
        	'likes'				=>	'1',
        	'status'			=>	'published',
        ]);   

    }
}
