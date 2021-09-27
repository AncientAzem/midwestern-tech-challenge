<?php

namespace Database\Seeders;

use App\Models\SiteContent;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class SiteContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();

        DB::table('site_content')->insert([
            'slug' => 'index',
            'title' => 'Tech Challenge | Home',
            'heading' => Str::ucfirst($faker->words(2, true)),
            'body' => $faker->paragraph()
       ]);

        DB::table('site_content')->insert([
            'slug' => 'contact',
            'title' => 'Tech Challenge | Contact',
            'heading' =>Str::ucfirst($faker->words(2, true)),
            'body' => $faker->paragraph()
        ]);
    }
}
