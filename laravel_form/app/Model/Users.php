<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
    protected $fillable = ['name','ruby','dt','gender','email','phone','inquiry'];
}
