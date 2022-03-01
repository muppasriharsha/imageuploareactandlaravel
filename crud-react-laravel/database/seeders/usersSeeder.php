<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\support\Facades\DB;
use Illuminate\support\Facades\Hash;
use Illuminate\support\Facades\str;


class usersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'name' => 'ravi',
                'email' => 'ravi@gmail.com',
                'password' => '99892786969'
            ], [
                'name' => 'harsha',
                'email' => 'harsha@gmail.com',
                'password' => '8639530148'
            ],
            [
                'name' => 'vasu',
                'email' => 'vasu@gmail.com',
                'password' => '123456789'
            ],
        ]);
    }
}
