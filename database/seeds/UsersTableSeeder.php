<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    private $defaultPwd = 'mylib12';

    public function run()
    {
        DB::table('users')->insert([
            [
                'role_id' => 1,
                'name' => 'Admin', 
                'email' => 'halilov.lib@gmail.com',
                'email_verified_at' => date('Y-m-d h:i:s'),
                'created_at' => date('Y-m-d h:i:s'),
                'updated_at' => date('Y-m-d h:i:s'),
                'password' => Hash::make($this->defaultPwd),
            ],
        ]);

        // DB::table('users')->insert([
        //     [
        //         'role_id' => 2,
        //         'name' => 'Operator', 
        //         'email' => 'akhalilov@beylitech.az',
        //         'email_verified_at' => date('Y-m-d h:i:s'),
        //         'created_at' => date('Y-m-d h:i:s'),
        //         'updated_at' => date('Y-m-d h:i:s'),
        //         'password' => Hash::make($this->defaultPwd),
        //     ],
        // ]);

        // DB::table('users')->insert([
        //     [
        //         'role_id' => 3,
        //         'name' => 'User', 
        //         'email' => 'hov-dev@protonmail.ch',
        //         'email_verified_at' => date('Y-m-d h:i:s'),
        //         'created_at' => date('Y-m-d h:i:s'),
        //         'updated_at' => date('Y-m-d h:i:s'),
        //         'password' => Hash::make($this->defaultPwd),
        //     ],
        // ]);
    }
}
