<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReservesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     * 
     * if yout database changes from PostgreSQL to MySQL
     * change all integer() with foreignKey to unsignedInteger()
     */
    
    public function up()
    {
        Schema::create('reserves', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->date('arrival_date');
            $table->date('departure_date');

            $table->time('arrival_time');
            $table->time('departure_time');

            // если база данных поменяется с postgreSQL на mySQL 
            // в миграциях следует сменить все integer на unsignedInteger
            $table->integer('group_type_id');
            $table->integer('nationality_id');
            $table->integer('age_range_id');
            $table->integer('hotel_star_id');
            $table->integer('cuisine_id');

            $table->boolean('need_transfer');
            $table->boolean('need_transport');
            $table->boolean('need_guide');
            $table->boolean('need_tour_options');
            $table->boolean('need_meeting_facilities');

            $table->string('email');
            $table->string('additional_request')->nullable();
            $table->timestamps();
        });

        Schema::table('reserves', function($table) {
            $table->foreign('group_type_id')->references('id')->on('group_types');
            $table->foreign('nationality_id')->references('id')->on('nationalities');
            $table->foreign('age_range_id')->references('id')->on('age_ranges');
            $table->foreign('hotel_star_id')->references('id')->on('hotel_stars');
            $table->foreign('cuisine_id')->references('id')->on('cuisine_types');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reserves');
    }
}
