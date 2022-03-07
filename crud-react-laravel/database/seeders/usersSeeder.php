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
                'name'=>'harsha',
                'email'=>'muppa@gmail.com',
                'password'=>'9492357802'
            ],[
            'name'=>'ravi',
            'email'=>'ravi@gmail.com',
            'password'=>'9492357802'
        ]]);
    }
}
