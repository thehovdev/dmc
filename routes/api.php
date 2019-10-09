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
    Route::get('/reserve/store', 'ReserveController@store');

    Route::namespace('Admin')->group(function () {

        Route::middleware(['auth'])->group(function () {
            // Route::post('/company/operator/', 'CompanyController@storeOperator');

            Route::apiResource('company', 'CompanyController');
            Route::apiResource('operator', 'OperatorController');
            Route::apiResource('contactPerson', 'ContactPersonController');
        });
    });
});