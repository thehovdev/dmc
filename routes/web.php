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

Route::namespace('Cabinet')->group(function () {
    Route::prefix('cabinet')->group(function () {
        // cabinet home page
        Route::get('/', 'HomeController@index')->name('cabinet.index');

        // company actions
        Route::get('/company', 'CompanyController@index')->name('cabinet.company.index');
        Route::get('/company/create', 'CompanyController@create')->name('cabinet.company.create');

        Route::get('/contactperson', 'ContactPersonController@index')->name('cabinet.person.index');
        Route::get('/contactperson/create', 'ContactPersonController@create')->name('cabinet.person.create');
    });
});

