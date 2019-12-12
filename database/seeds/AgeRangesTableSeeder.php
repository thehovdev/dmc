<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AgeRangesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('age_ranges')->insert([
            ['name' => "0-20", 'prefix' => 'yearBetween0and20'],
            ['name' => "20-30", 'prefix' => 'yearBetween20and30'],
            ['name' => "30-50", 'prefix' => 'yearBetween30and50'],
            ['name' => "50-80", 'prefix' => 'yearBetween50and80']
        ]);
    }
}
