<?php

use Illuminate\Database\Seeder;

class PageTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
         App\Page::create ([
            'status'    => 'published',
            'title'     =>  'AGB',
            'slug'      =>  'agb',
            'subtitle'  =>  'AGB',
            'excerpt'   =>  'These are the AGBs',
            'body'      =>  'hier a lot of words',
            'image'     =>  'bmw.jpg',
        ]);   
                
         App\Page::create ([
            'status'    => 'published',
            'title'     =>  'Impressum',
            'slug'      =>  'impressum',
            'subtitle'  =>  'The impressum subtitle',
            'excerpt'   =>  'These are the excerpt of the impressum',
            'body'      =>  'These are the details of the impressum',
            'image'     =>  'berlin.jpg',
        ]);   
                
		 App\Page::create ([
            'status'    => 'published',
            'title'     =>  'Contact',
            'slug'      =>  'contact',
            'subtitle'  =>  'The Contact subtitle',
            'excerpt'   =>  'These are the excerpt of Contact page',
            'body'      =>  'hier a lot of words about how to get in contact',
            'image'     =>  'concert.jpg',
        ]);   
        

    }
}
