<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Users;

class SendController extends Controller
{
    public function create(Request $request) {
        /*$name = $request->input($name);
        $ruby = $request->input($ruby);
        $dt = $request->input($dt);
        $gender = $request->input($gender);
        $email = $request->input($email);
        $phone = $request->input($phone);
        $inquiry = $request->input($inquiry);

        Users::insert(["name" => $name, "ruby" => $ruby, "dt" => $dt, "gender" => $gender, "email" => $email,"phone" => $phone,"inquiry" => $inquiry]);*/
        
        $users = Users::all();
        return view('form.send', ["users" => $users]);
    }
}
