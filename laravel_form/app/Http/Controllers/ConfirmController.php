<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Users;
use App\Rules\ruby;

class ConfirmController extends Controller
{
    public function index() {
        return view('form.index');
    }
    public function confirm(Request $request) {
        
        $users = new Users($request->all());

        $validatedData = $request -> validate( [
            'name' => 'required|string|max:30',
            'ruby' => ['required','max:30', new ruby],
            'dt' => 'required|date',
            'gender' => 'required',
            'email' => 'required|email',
            'phone' => 'required|numeric|digits_between:8,11',
            'inquiry' => 'required|max:100'
        ]);

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


