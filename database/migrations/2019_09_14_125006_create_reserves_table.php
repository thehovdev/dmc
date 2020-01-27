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

            $table->time('arrival_time')->nullable();
            $table->time('departure_time')->nullable();

            // если база данных поменяется с postgreSQL на mySQL 
            // в миграциях следует сменить все integer на unsignedInteger
            $table->integer('user_id');
            $table->integer('group_type_id');
            $table->integer('nationality_id');
            $table->integer('age_range_id');
            $table->integer('country_id');

            $table->integer('age_from')->nullable();
            $table->integer('age_to')->nullable();


            $table->string('hotel_star_id_list')->nullable();
            $table->string('cuisine_id_list')->nullable();
            $table->string('transfer_id_list')->nullable();

            $table->integer('number_of_people');
            $table->integer('number_of_tourleaders')->nullable();
            
            $table->float('single_min_price')->nullable();
            $table->float('single_max_price')->nullable();
            $table->float('double_min_price')->nullable();
            $table->float('double_max_price')->nullable();
            $table->float('triple_min_price')->nullable();
            $table->float('triple_max_price')->nullable();

            $table->boolean('need_transfer');
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
            $table->foreign('user_id')->references('id')->on('users');
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
