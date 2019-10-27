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
Route::get('logout', 'Auth\LoginController@logout');

Route::view('/', 'index')->name('index');
Route::view('/test', 'test');

// admin panel
Route::namespace('Admin')->group(function () {
    Route::prefix('admin')->group(function () {
        Route::middleware(['auth.admin'])->group(function () {
            // admin home page
            Route::get('/', 'HomeController@index')->name('admin.index');

            // admin companies
            Route::get('/company', 'CompanyController@index')->name('admin.company.index');
            Route::get('/company/create', 'CompanyController@create')->name('admin.company.create');

            Route::get('/operator', 'OperatorController@index')->name('admin.operator.index');
            Route::get('/operator/create', 'OperatorController@create')->name('admin.operator.create');
            // admin contact persons
            Route::get('/contactperson', 'ContactPersonController@index')->name('admin.person.index');
            Route::get('/contactperson/create', 'ContactPersonController@create')->name('admin.person.create');
        });
    });
});

// cabinet
Route::namespace('Cabinet')->group(function () {
    Route::prefix('cabinet')->group(function () {
        // specify multi auth middleware, web = users table, operator = operators table
        Route::middleware(['auth:web,operator'])->group(function () {
            // cabinet home page
            Route::get('/', 'HomeController@index')->name('cabinet.index');

            // client requests
            Route::get('/reserve', 'ReserveController@index')->name('cabinet.reserve.index');
            Route::get('/reserve/create', 'ReserveController@index')->name('cabinet.reserve.create');
        });
        
    });
});

