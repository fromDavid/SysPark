<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Park extends Model
{
    protected $table = "parks";
	protected $primaryKey = "user_id";
	protected $fillable = ['local', 'piso', 'carro', 'data'];
	
	public $timestamps = false;

	public function user(){
		return $this->belongsTo('App\User');
	}
}
