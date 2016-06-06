<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Proprietario extends Model
{
	protected $table = "proprietarios";
	protected $fillable = ['id_User', 'id_Carro'];
	
	public $timestamps = true;
}
