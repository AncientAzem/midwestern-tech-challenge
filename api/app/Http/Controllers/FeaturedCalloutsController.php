<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FeaturedCallout;

class FeaturedCalloutsController extends Controller
{
    /**
     * Submit form data
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $content = FeaturedCallout::all();
        return response($content);
    }
}
