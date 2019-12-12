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
            ['name' => "Training", 'prefix' => 'group_type_training'],
            ['name' => "Incentive", 'prefix' => 'group_type_incentive'],
            ['name' => "Conference", 'prefix' => 'group_type_conference'],
            ['name' => "Meeting", 'prefix' => 'group_type_meeting'],
            ['name' => "CityWide Event", 'prefix' => 'group_type_city_wide_event'],
            ['name' => "Event", 'prefix' => 'group_type_event'],
            ['name' => "Corporate", 'prefix' => 'group_type_corporate'],
            ['name' => "Government", 'prefix' => 'group_type_government'],
            ['name' => "Leisure", 'prefix' => 'group_type_leisure'],
            ['name' => "Family", 'prefix' => 'group_type_family']
        ]);
    }
}
