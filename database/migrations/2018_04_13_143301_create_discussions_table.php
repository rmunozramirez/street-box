<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDiscussionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('discussions', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('profile_id')->index();
            $table->enum('status', ['active', 'inactive', 'on_hold', 'banned'])->default('inactive');
            $table->string('title')->unique();  
            $table->string('slug')->unique();
            $table->text('body')->nullable();
            $table->string('image')->unique();
            $table->integer('likes')->unsigned()->default(0);
            $table->boolean('is_testimonial')->default(0);
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
        Schema::dropIfExists('discussions');
    }
}
