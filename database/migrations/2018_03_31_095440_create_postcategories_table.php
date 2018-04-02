<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('postcategories', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title', 60)->unique();
            $table->string('slug', 80)->unique();
            $table->string('subtitle', 150)->nullable();
            $table->string('excerpt', 256)->nullable();
            $table->text('about_category')->nullable();
            $table->enum('status', ['active', 'inactive', 'on_hold'])->default('active');       
            $table->string('image');
            $table->boolean('is_featured')->default(false);
            $table->boolean('in_menu')->default(true);
            $table->softDeletes();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('postcategories');
    }
}
