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
        Route::apiResource('company', 'CompanyController');
        Route::apiResource('operator', 'OperatorController');
        Route::apiResource('contactPerson', 'ContactPersonController');
    });

    // for operators, users, admin
    Route::apiResource('reserve', 'ReserveController');
    
});