<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateParquesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('parques', function (Blueprint $table) {
            $table->increments('id');
            $table->string('local');
            $table->string('piso');
            $table->string('lugar');
            $table->integer('id_Carro')->unsigned();
            $table->foreign('id_Carro')->references('id_Carro')->on('carros')->onDelete('cascade')->onUpdate('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('parques');
    }
}
