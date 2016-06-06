<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProprietariosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('proprietarios', function (Blueprint $table) {
            $table->integer('id_User')->unsigned();
            $table->foreign('id_User')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->integer('id_Carro')->unsigned();
            $table->foreign('id_Carro')->references('id')->on('carros')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
