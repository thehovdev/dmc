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
            $table->integer('country_id');
            $table->string('hotel_star_id_list');
            $table->string('cuisine_id_list');
            $table->string('transport_id_list');

            $table->integer('number_of_people');
            $table->integer('number_of_tourleaders');
            
            $table->float('single_min_price');
            $table->float('single_max_price');
            $table->float('double_min_price');
            $table->float('double_max_price');

            $table->boolean('need_transport');
            $table->boolean('need_guide');
            $table->boolean('need_visa');
            $table->boolean('need_hotel');
            $table->boolean('need_cuisine');
            $table->boolean('need_meeting_facilities');
            $table->boolean('need_excursion_options');
            $table->boolean('need_tour_leader');

            $table->string('email')->nullable();
            
            $table->string('meeting_facilities_description')->nullable();
            $table->string('excursion_options_description')->nullable();
            $table->string('language_of_tourleaders')->nullable();
            $table->string('hotel_description')->nullable();
            $table->string('additional_request')->nullable();
            $table->timestamps();
        });

        Schema::table('reserves', function($table) {
            $table->foreign('group_type_id')->references('id')->on('group_types');
            $table->foreign('nationality_id')->references('id')->on('nationalities');
            $table->foreign('age_range_id')->references('id')->on('age_ranges');
            $table->foreign('country_id')->references('id')->on('countries');
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
