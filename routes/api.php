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
    // Route::get('company/update/{company}', 'CompanyController@update');
    Route::apiResource('company', 'CompanyController');
    Route::apiResource('contactPerson', 'ContactPersonController');

    // Route::get('/company/get/{company}', 'CompanyController@getCompany')->name('api.company.get');
    // Route::get('/company/get', 'CompanyController@getCompanies')->name('api.companies.get');
});