<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRespondedReservesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('responded_reserves', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('reserve_id');
            $table->integer('operator_id')->nullable();
            $table->integer('user_id')->nullable();
            
            $table->string('hotel_name');
            $table->string('vehicle_name');
            $table->string('offered_tours')->nullable();
            $table->string('currency');

            $table->float('single_price');
            $table->float('double_price');
            $table->float('triple_price');

            $table->timestamps();
        });

        Schema::table('responded_reserves', function($table) {
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
        Schema::dropIfExists('responded_reserves');
    }
}
