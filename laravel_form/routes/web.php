<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'ConfirmController@index');

Route::post('/confirm','ConfirmController@confirm');

Route::post('/update','ConfirmController@update');

Route::get('/complete','ConfirmController@complete');

Route::get('/history','ConfirmController@history');





