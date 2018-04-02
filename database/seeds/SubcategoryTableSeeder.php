<?php

use Illuminate\Database\Seeder;

class SubcategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         App\Subcategory::create ([
            'title'             =>  'Subcategory One-One',
            'subtitle'          =>  'Subtitle Subcategory One-One',
            'slug'              =>  'subcategory-one-one',
            'excerpt'           =>  'This is the excerpt of the Subcategory one-one',
            'about_subcategory' =>  'This is the description of the Subcategory one-one',
            'status'            =>  'active',
            'image'             =>  'bmw.jpg',
            'is_featured'       =>  '1',
            'in_menu'           =>  '1',
            'category_id'       =>  '1',
        ]);     

         App\Subcategory::create ([
            'title'             =>  'Subcategory One-Two',
            'subtitle'          =>  'Subtitle Subcategory One-Two',
            'slug'              =>  'subcategory-one-two',
            'excerpt'           =>  'This is the excerpt of the Subcategory One-Two',
            'about_subcategory' =>  'This is the description of the Subcategory One-Two',
            'status'            =>  'active',
            'image'             =>  'berlin.jpg',
            'is_featured'       =>  '1',
            'in_menu'           =>  '1',
            'category_id'       =>  '1',
        ]);     
         
         App\Subcategory::create ([
            'title'             =>  'Subcategory Two-One',
            'subtitle'          =>  'Subtitle Subcategory Two-one',
            'slug'              =>  'subcategory-two-one',
            'excerpt'           =>  'This is the excerpt of the Subcategory Two-one',
            'about_subcategory' =>  'This is the description of the Subcategory Two-one',
            'status'            =>  'inactive',
            'image'             =>  'concert.jpg',
            'is_featured'       =>  '0',
            'in_menu'           =>  '0',
            'category_id'       =>  '2',
        ]);

         App\Subcategory::create ([
            'title'             =>  'Subcategory Three-One',
            'subtitle'          =>  'Subtitle Subcategory Three-one',
            'slug'              =>  'subcategory-three-one',
            'excerpt'           =>  'This is the excerpt of the Subcategory Three-one',
            'about_subcategory' =>  'This is the description of the Subcategory Three-one',
            'status'            =>  'inactive',
            'image'             =>  'concerto.jpg',
            'is_featured'       =>  '0',
            'in_menu'           =>  '0',
            'category_id'       =>  '3',
        ]);
    }
}
