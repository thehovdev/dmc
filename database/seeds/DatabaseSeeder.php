<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(GroupTypesTableSeeder::class);
        $this->call(NationalitiesTableSeeder::class);
        $this->call(AgeRangesTableSeeder::class);
        $this->call(HotelStarsTableSeeder::class);
        $this->call(CuisineTypesTableSeeder::class);
    }
}
