<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateChanelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chanels', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('subcategory_id')->index()->unsigned();
            $table->integer('profile_id')->index()->unsigned();    
            $table->enum('status', ['active', 'inactive', 'on_hold', 'banned'])->default('inactive');
            $table->string('title')->unique();  
            $table->string('slug')->unique();  
            $table->string('subtitle')->nullable();
            $table->text('excerpt')->nullable();  
            $table->text('about_chanel')->nullable();
            $table->string('image')->unique();
            $table->string('video')->unique()->nullable();
            $table->boolean('is_featured')->default(0);
            $table->integer('likes')->unsigned()->default(0);
            $table->boolean('is_testimonial')->default(0);
            $table->string('web')->nullable();
            $table->string('facebook')->nullable();
            $table->string('googleplus')->nullable();
            $table->string('twitter')->nullable();
            $table->string('linkedin')->nullable();
            $table->string('youtube')->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('chanels');
    }
}
