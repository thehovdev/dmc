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

    // Route::get('/reserve/store', 'ReserveController@store');

    // web is users, operator is operators, grant access all of him by his role
    Route::middleware(['auth:web,operator'])->group(function () {

        Route::get('/user', 'UserController@index');
        Route::get('/user/restore/{user}', 'UserController@restore');
        Route::delete('/user/{user}', 'UserController@destroy');

        Route::get('/company/restore/{id}', 'CompanyController@restore');
        Route::apiResource('company', 'CompanyController');

        Route::get('/contactPerson/restore/{id}', 'ContactPersonController@restore');
        Route::apiResource('contactPerson', 'ContactPersonController');

        Route::get('/operator/restore/{id}', 'OperatorController@restore');
        Route::apiResource('operator', 'OperatorController');
    
       // for operators, users, admin

       // decline & roste
       Route::get('reserve/declined/', 'ReserveController@declined');
       Route::get('reserve/decline/{reserve}', 'ReserveController@decline');
       Route::get('reserve/restore/{reserve}', 'ReserveController@restore');

       // respond ( send proposal )
       Route::get('reserve/responded', 'ReserveController@responded');
       Route::get('reserve/responded/{reserve}', 'ReserveController@showResponded');
       Route::post('reserve/respond/{reserve}', 'ReserveController@respond');
       Route::post('reserve/updaterespond/{reserve}', 'ReserveController@updateRespond');

       // reserve api resource
       Route::apiResource('reserve', 'ReserveController');
    });


    

});