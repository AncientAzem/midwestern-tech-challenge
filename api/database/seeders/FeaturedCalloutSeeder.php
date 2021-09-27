<?php

namespace Database\Seeders;

use App\Models\FeaturedCallout;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class FeaturedCalloutSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();

        DB::table('featured_callouts')->insert([
            'icon' => 'Talkie',
            'heading' => Str::ucfirst($faker->words(2, true)),
            'body' => $faker->paragraph(),
            'link_text' => 'Learn more',
            'link_url' => $faker->url()
        ]);

        DB::table('featured_callouts')->insert([
            'icon' => 'Rabbit',
            'heading' => Str::ucfirst($faker->words(2, true)),
            'body' => $faker->paragraph(),
            'link_text' => 'Learn more',
            'link_url' => $faker->url()
        ]);

        DB::table('featured_callouts')->insert([
            'icon' => 'Shield',
            'heading' => Str::ucfirst($faker->words(2, true)),
            'body' => $faker->paragraph(),
            'link_text' => 'Learn more',
            'link_url' => $faker->url()
        ]);
    }
}
