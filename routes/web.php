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
Route::get('/test', 'TestController@index');


// set locale
Route::get('setlocale/{locale}', 'LocaleController@setLocale');

// admin panel
Route::namespace('Admin')->group(function () {
    Route::prefix('admin')->group(function () {
        Route::middleware(['auth.admin'])->group(function () {
            // admin home page
            Route::get('/', 'HomeController@index')->name('admin.index');


            // admin users
            Route::get('/user', 'UserController@index')->name('admin.user.index');

            // admin companies
            Route::get('/company', 'CompanyController@index')->name('admin.company.index');
            Route::get('/company/create', 'CompanyController@create')->name('admin.company.create');
            // admin operators
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

            // for operator
            Route::get('/reserve', 'ReserveController@index')->name('cabinet.reserve.index');
            Route::get('/reserve/declined', 'ReserveController@declined')->name('cabinet.reserve.declined');
            Route::get('/reserve/responded', 'ReserveController@responded')->name('cabinet.reserve.responded');
            Route::get('/reserve/create', 'ReserveController@index')->name('cabinet.reserve.create');

            // for user
            Route::get('/user/reserve', 'ReserveController@userReserves')->name('cabinet.reserve.user.index');
        });
    });
});



    

