<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Users;

class ConfirmController extends Controller
{
    public function index() {
        return view('form.index');
    }
    public function confirm(Request $request) {

        
        
        
        $users = new Users($request->all());

        

        /*$this->validate($request, [
            'name' => 'required|max:30',
            'ruby' => 'required|max:30',
            'dt' => 'required',
            'gender' => 'required',
            'email' => 'required',
            'phone' => 'required',
            'inquiry' => 'required'
        ]);*/

        

        $request->session()->put('users', $users);

        return view('form.confirm', compact('users'));

       
    }

    public function update(Request $request) {

        $users = $request->session()->get('users');

        $users->save();

        return redirect('complete');    
    }

    public function complete(Request $request) {
        return view('form.send');
    }



    
}


