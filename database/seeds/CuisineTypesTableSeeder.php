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
            ['name' => "Mix"],
            ['name' => "Local"],
            ['name' => "Indian"],
            ['name' => "Arabic"],
            ['name' => "Italian"],
            ['name' => "International"]
        ]);
    }
}
