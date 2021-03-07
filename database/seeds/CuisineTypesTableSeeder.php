<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CuisineTypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('cuisine_types')->insert([
            ['name' => "Mix", 'prefix' => 'cuisine_mix'],
            ['name' => "Local", 'prefix' => 'cuisine_local'],
            ['name' => "Indian", 'prefix' => 'cuisine_indian'],
            ['name' => "Arabic", 'prefix' => 'cuisine_arabic'],
            ['name' => "Italian", 'prefix' => 'cuisine_italian'],
            ['name' => "International", 'prefix' => 'cuisine_international']
        ]);
    }
}
