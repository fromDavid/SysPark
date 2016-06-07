<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Carro extends Model
{
    protected $table = "carros";
	protected $primaryKey = "id_Carro";
	protected $fillable = ['nome_Carro'];
	
	public $timestamps = true;

	public function user(){
		return $this->belongsTo('App\User');
	}
}
