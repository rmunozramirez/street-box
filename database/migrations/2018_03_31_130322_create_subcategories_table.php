<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSubcategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subcategories', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('category_id')->index();
            $table->string('title')->unique();
            $table->string('subtitle')->nullable();
            $table->string('slug')->unique();
            $table->string('excerpt')->nullable();
            $table->enum('status', ['active', 'inactive', 'on_hold'])->default('active');
            $table->text('about_subcategory')->nullable();
            $table->string('image')->unique();
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
        Schema::dropIfExists('subcategories');
    }
}
