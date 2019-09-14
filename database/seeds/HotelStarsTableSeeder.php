<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class HotelStarsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('hotel_stars')->insert([
            ['name' => "3"],
            ['name' => "4"],
            ['name' => "5"]
        ]);
    }
}
