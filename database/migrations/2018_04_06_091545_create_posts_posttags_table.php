<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostsPosttagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts_posttags', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('post_id')->unsigned();
            $table->integer('posttag_id')->unsigned();
            $table->timestamps();
        });

       Schema::table('posts_posttags', function($table) {
           $table->foreign('post_id')->references('id')->on('posts');
           $table->foreign('posttag_id')->references('id')->on('posttags');
       });
    }       

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS = 0');
        Schema::dropIfExists('posts_posttags');
        DB::statement('SET FOREIGN_KEY_CHECKS = 1'); 
    }
}
