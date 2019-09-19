<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class GroupTypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('group_types')->insert([
            ['name' => "Training"],
            ['name' => "Incentive"],
            ['name' => "Conference"],
            ['name' => "Meeting"],
            ['name' => "CityWide Event"],
            ['name' => "Event"],
            ['name' => "Corporate"],
            ['name' => "Government"],
            ['name' => "Leisure"],
            ['name' => "Family"]
        ]);
    }
}
