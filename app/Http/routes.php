<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::group(array('prefix' => 'api/v1'), function() {
	Route::resource('parques', 'ParqueController');
	Route::resource('carros', 'CarroController');
});


/*Route::group(array('prefix' => 'api/v1/parks/user_id/{user_id}'), function() {
	Route::resource('parks', 'ParkController');
});*/