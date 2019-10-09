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

// admin panel
Route::namespace('Admin')->group(function () {
    Route::prefix('admin')->group(function () {
        // admin home page
        Route::get('/', 'HomeController@index')->name('admin.index');

        // admin companies
        Route::get('/company', 'CompanyController@index')->name('admin.company.index');
        Route::get('/company/create', 'CompanyController@create')->name('admin.company.create');

        // admin contact persons
        Route::get('/contactperson', 'ContactPersonController@index')->name('admin.person.index');
        Route::get('/contactperson/create', 'ContactPersonController@create')->name('admin.person.create');
    });
});

// cabinet
// Route::namespace('Cabinet')->group(function () {
//     Route::prefix('cabinet')->group(function () {

//     });
// });

