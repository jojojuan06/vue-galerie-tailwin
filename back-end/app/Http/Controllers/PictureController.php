<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \models\Picture;

class PictureController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getPictures()
    {
        $picture = Picture::all();
        return $picture->toJson();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function createPicture(Request $request)
    {
        $picture = Picture::create([
        // récupéré les inputs
        'name' => $request->input('name'),
        'path' => $request->input('path'),
        'tags' => $request->input('tags'),
        ]);
        return $picture->toJson();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getOnePicture($id)
    {
        $picture = Picture::find($id);
        // transformer l'instance en json pour utiliser des donner dans une api
        return $picture->toJson();
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updatePicture(Request $request, $id)
    {
        $picture = Picture::find($id);
        //mettre a jours plusieur valeur avec fill
        $picture->fill(['name' => $request->input('name'),
                        'path' => $request->input('path'),
                        'tags' => $request->input('tags'),
        ]);
        //sauvegarde dans la bdd
        $picture->save();
        return $picture->toJson();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deletePicture($id)
    {
        //recupere l'intance du model et on delete
        $picture = Picture::find($id);
        $picture->delete();
        return response('', 204); //aucun contenue dans la reponse
    }
}
