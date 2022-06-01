<?php

namespace models;

use Illuminate\Database\Eloquent\Model;

class Picture extends Model
{
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name','path','tags'];
}
