<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FormSubmission;

class ContactController extends Controller
{
    /**
     * Submit form data
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $submission = new FormSubmission();

        $submission->first_Name = $request->input('firstName');
        $submission->last_name = $request->input('lastName');
        $submission->title = $request->input('title');
        $submission->email = $request->input('email');
        $submission->message = $request->input('message');

        $submission->save();
        return response("Submission Saved. Thank you!");
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $content = FormSubmission::all();
        return response($content);
    }
}
