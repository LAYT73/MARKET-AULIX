<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
|   Здесь ничего сука не трогаем
|
*/

Route::get('/', function () {
    return view('test');
});

Route::post('/reg', [AuthController::class, 'registration']);
Route::post('/auth', [AuthController::class, 'auth']);