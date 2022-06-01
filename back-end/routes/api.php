<?php

use Illuminate\Http\Request;
use App\Http\Controllers\PictureController;
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
//middleware cors group

Route::middleware(['cors'])->group(function () {

// crée un picture
Route::post('/pictures', [PictureController::class, 'createPicture']);

// récupéré toutes les pictures
Route::get('/pictures', [PictureController::class, 'getPictures']);

//récupéré une picture
Route::get('/pictures/{id}', [PictureController::class, 'getOnePicture']);

//mettre a jour une picture
Route::patch('/pictures/{id}', [PictureController::class, 'updatePicture']);

//supprimer une picture
Route::delete('/pictures/{id}', [PictureController::class, 'deletePicture']);

});
