<?php

use App\Role;
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
    private $adminPwd = 't8yDXuYVa93nxVtq';

    public function run()
    {
        DB::table('users')->insert([
            [
                'role_id' => Role::whereName('admin')->first()->id,
                'status' => 1,
                'name' => 'Admin', 
                'email' => 'murad.asadov@priceformice.com',
                'email_verified_at' => date('Y-m-d h:i:s'),
                'created_at' => date('Y-m-d h:i:s'),
                'updated_at' => date('Y-m-d h:i:s'),
                'password' => Hash::make($this->adminPwd),
            ],

            [
                'role_id' => Role::whereName('user')->first()->id,
                'status' => 1,
                'name' => 'User', 
                'email' => 'hov-dev@protonmail.ch',
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
