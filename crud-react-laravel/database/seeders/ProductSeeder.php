<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\support\Facades\DB;
use Illuminate\support\Facades\Hash;
use Illuminate\support\Facades\str;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert([
            [
                'FirstName' => 'ravi',
                "LastName" => 'chinta',
                'Email_ID' => 'ravi@gmail.com',
                'State_ID' => "Andhra Pradesh",
                'City_ID' => 'Alamuru',
                'image' => "adasd",
                "Create_By" => 1
            ],
            [
                'FirstName' => 'Meher',
                "LastName" => 'chinta',
                'Email_ID' => 'Meher@gmail.com',
                'State_ID' => "Andhra Pradesh",
                'City_ID' => 'jonnada',
                'image' => "adasd",

                "Create_By" => 1
            ],
            [
                'FirstName' => 'Monk',
                "LastName" => 'aaryan',
                'Email_ID' => 'aaryan@gmail.com',
                'State_ID' => "Telangana",
                'City_ID' => 'Hydrabad',
                'image' => "adasd",

                "Create_By" => 1
            ],
            [
                'FirstName' => 'onk',
                "LastName" => 'ryan',
                'Email_ID' => 'ryan@gmail.com',
                'State_ID' => "Telangana",
                'City_ID' => 'Hydrabad',
                'image' => "adasd",

                "Create_By" => 2
            ],
            [
                'FirstName' => 'pushpa',
                "LastName" => 'Rajy',
                'Email_ID' => 'pushpa@gmail.com',
                'State_ID' => "Telangana",
                'City_ID' => 'Hydrabad',
                'image' => "adasd",

                "Create_By" => 2
            ],
            [
                'FirstName' => 'usha',
                "LastName" => 'Rajy',
                'Email_ID' => 'usha@gmail.com',
                'State_ID' => "Telangana",
                'City_ID' => 'Adilabad',
                'image' => "adasd",

                "Create_By" => 3
            ],
            [
                'FirstName' => 'Rasajnya',
                "LastName" => 'Rajy',
                'Email_ID' => 'Rasnaa@gmail.com',
                'State_ID' => "Telangana",
                'City_ID' => 'Hydrabad',
                'image' => "adasd",

                "Create_By" => 3
            ],
            [
                'FirstName' => 'Rajyam',
                "LastName" => 'Rajym',
                'Email_ID' => 'Rajyam@gmail.com',
                'State_ID' => "Delhi",
                'City_ID' => 'New Delhi',
                'image' => "adasd",

                "Create_By" => 3
            ],
        ]);
    }
}
