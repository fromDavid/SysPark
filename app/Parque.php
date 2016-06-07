<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Parque extends Model
{
    protected $table = "parque";
	protected $primaryKey = "id";
	protected $fillable = ['data_Registo', 'local', 'piso', 'lugar', 'id_Carro'];
	
	public $timestamps = true;

	public function user(){
		return $this->hasMany('App\Carro');
	}
}
