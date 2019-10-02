<?php

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
Auth::routes();


Route::view('/', 'index')->name('index');
Route::view('/test', 'test');


Route::namespace('Api')->group(function () {
    Route::get('/reserve/store', 'ReserveController@store');
});

Route::namespace('Cabinet')->group(function () {
    Route::prefix('cabinet')->group(function () {
        Route::get('/', 'HomeController@index')->name('cabinet.index');

        Route::get('/companies/get', 'CompanyController@getCompanies')->name('cabinet.companies.get');
        Route::resource('/company', 'CompanyController', [
            'as' => 'cabinet'
        ]);
        // Route::get('/company', 'CompanyController@index')->name('cabinet.company');
        // Route::get('/company/create', 'CompanyController@create')->name('cabinet.company.create');
        // Route::get('/company/edit', 'CompanyController@create')->name('cabinet.company.create');
        // Route::get('/company/delete', 'CompanyController@create')->name('cabinet.company.create');
        // Route::any('/company/store', 'CompanyController@store')->name('cabinet.company.store');
    });
});

