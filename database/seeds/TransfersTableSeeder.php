<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TransfersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('transfers')->insert([
            ['name' => "Airport"],
            ['name' => "During the stay"]
        ]);
    }
}
