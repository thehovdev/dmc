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
            ['name' => "Mix(local and others)"],
            ['name' => "Local"],
            ['name' => "Indian"],
            ['name' => "Italian"],
            ['name' => "Arabic"],
            ['name' => "International"]
        ]);
    }
}
