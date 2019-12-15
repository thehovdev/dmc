<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::namespace('Api')->group(function () {

    Route::get('/user/checkauth', 'UserController@checkauth');
    Route::get('/step/parameters/get', 'ReserveController@getStepParameters');


    // if user is logged in or dmc ( operator ) is logged in
    Route::middleware(['auth:web,operator', 'xss-filter'])->group(function () {
        Route::get('/user', 'UserController@index');
        Route::get('/user/restore/{user}', 'UserController@restore');
        Route::delete('/user/{user}', 'UserController@destroy');

        Route::get('/company/restore/{id}', 'CompanyController@restore');
        Route::apiResource('company', 'CompanyController');

        Route::get('/contactPerson/restore/{id}', 'ContactPersonController@restore');
        Route::apiResource('contactPerson', 'ContactPersonController');

        Route::get('/operator/restore/{id}', 'OperatorController@restore');
        Route::apiResource('operator', 'OperatorController');
    
        // for operators

        // decline & roste
        Route::get('reserve/declined/', 'ReserveController@declined');
        Route::get('reserve/decline/{reserve}', 'ReserveController@decline');
        Route::get('reserve/restore/{reserve}', 'ReserveController@restore');

        // respond ( send proposal )
        Route::get('reserve/responded', 'ReserveController@responded');
        Route::get('reserve/responded/{reserve}', 'ReserveController@showResponded');
        Route::post('reserve/respond/{reserve}', 'ReserveController@respond');
        Route::post('reserve/updaterespond/{reserve}', 'ReserveController@updateRespond');

        // responded requests for user
        Route::get('reserve/user/', 'ReserveController@index');
        Route::get('reserve/user/responded', 'ReserveController@respondedByUser');
        Route::get('reserve/user/{reserve}/', 'ReserveController@showByUser');

        // reserve api resource
        Route::apiResource('reserve', 'ReserveController');
    });


    

});