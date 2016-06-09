<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Parque extends Model
{
    protected $table = "parques";
	protected $primaryKey = "id";
	protected $fillable = ['local', 'piso', 'lugar', 'id_Carro', 'created_at'];
	
	public $timestamps = true;

	public function user(){
		return $this->hasMany('App\Parque');
	}
}
