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

Route::group(['middleware' => 'cors', 'prefix' => 'api'], function()
{
    Route::resource('authenticate', 'AuthenticateController', ['only' => ['index']]);
    Route::post('authenticate', 'AuthenticateController@authenticate');
    Route::get('authenticate/user', 'AuthenticateController@getAuthenticatedUser');
});

Route::group(array(['middleware' => 'cors', 'prefix' => 'api/v1'], function() {
	Route::resource('parques', 'ParqueController');
});


/*Route::group(array('prefix' => 'api/v1/parks/user_id/{user_id}'), function() {
	Route::resource('parks', 'ParkController');
});*/