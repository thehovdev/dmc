<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TransferTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('transfers')->insert([
            ['name' => "Airport", 'created_at' => date('Y-m-d h:i:s'), 'prefix' => 'transfer_airport'],
            ['name' => "During the stay", 'created_at' => date('Y-m-d h:i:s'), 'prefix' => 'transfer_during_stay']
        ]);
    }
}
