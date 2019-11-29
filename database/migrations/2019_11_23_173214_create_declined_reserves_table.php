<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDeclinedReservesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('declined_reserves', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('reserve_id');
            $table->integer('operator_id')->nullable();
            $table->integer('user_id')->nullable();
            $table->timestamps();
        });

        Schema::table('declined_reserves', function($table) {
            $table->foreign('reserve_id')->references('id')->on('reserves');
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('declined_reserves');
    }
}
