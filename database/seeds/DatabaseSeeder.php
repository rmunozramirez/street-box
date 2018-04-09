<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    
        $this->call(PostcategoryTableSeeder::class);
        $this->call(PostTableSeeder::class);  
        $this->call(ChanelTableSeeder::class);
        $this->call(CategoryTableSeeder::class);
        $this->call(SubcategoryTableSeeder::class);
        $this->call(UserTableSeeder::class);
        $this->call(PosttagTableSeeder::class);        
        $this->call(RolesTableSeeder::class);             
    }
}
