<?php

namespace App\Http\Controllers;

//interfaces
use Illuminate\Support\Collection;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Requests;

//models
use App\Parque;
use App\Carro;
use App\Proprietario;
use App\User;

class CarroController extends Controller
{
	/*public function __construct() {
        $this->middleware('auth');
    }*/
    //construtor
	public function index() {
		try {
			//standard response for successful HTTP requests
			$statusCode = 200; //Ok
			//reset data collection
			$response = collect([]);
			
			//get all persons from database
			$carros = Carro::all();
			foreach($carros as $carro) {
				//add person to the collection
				$response->push([
					'id_Carro' => $carro->id_Carro,
					'nome_Carro' => $carro->nome_Carro,
					'created_at' => $carro->created_at
				]);
			}
		} catch (Exception $e) {
			//standard response for HTTP error requests
			$statusCode = 400; //Bad Request
		} finally {
			return response()->json($response, $statusCode)->header('Access-Control-Allow-Origin', '*')->header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
		}
	}
	

	public function show($id_Carro) {
		try {
			$statusCode = 200;
			$response = collect([]);

			$carros = Carro::all();
			$carros = Carro::where('id_Carro', $id_Carro)->get();
			foreach ($carros as $carro) {
				$response->push([
					'id_Carro' => $carro->id_Carro,
					'nome_Carro' => $carro->nome_Carro,
					'created_at' => $carro->created_at
				]);
			}

		} catch (Exception $e) {
			$response->push(['error' => 'Car not found.']);
			$statusCode = 404; //Not Found
		} finally {
			return response()->json($response, $statusCode)->header('Access-Control-Allow-Origin', '*')->header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
		}
	}
	
	//to be continued... (or not)
	public function store(Request $request) {
		try {
			$statusCode = 200;
			$response = collect([]);
			
			Carro::create(array(
				'nome_Carro' => $request->input('valor.nome_Carro'),
				'created_at' => $request->input('valor.created_at'),
				'updated_at' => $request->input('valor.updated_at')
			));
			$response->push(['created' => 'Location created successfully.']);
		} catch (Exception $e) {
			$response->push(['error' => 'Error creating Location.']);
			$statusCode = 404;
		} finally {
			return response()->json($response, $statusCode);
		}
	}
	
	//to be continued... (or not)
	public function update(Request $request, $id_Carro) {
		try {
			$statusCode = 200;
			$response = collect([]);
			
			$carros = Carro::findOrFail($id_Carro);
			$carros->fill($request->all())->save();
			$response->push(['updated' => 'Car updated successfully.']);
		} catch (Exception $e) {
			$response->push(['error' => 'Error updating Location.']);
			$statusCode = 404;
		} finally {
			return response()->json($response, $statusCode)->header('Access-Control-Allow-Origin', '*')->header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
		}
	}
	
	//to be continued... (or not)
	public function destroy($id_Carro) {
		try {
			$statusCode = 200;
			$response = collect([]);
			
			$carros = Carro::findOrFail($id_Carro);
			$carros->delete();
			$response->push(['success' => 'Car deleted successfully.']);
		} catch (Exception $e) {
			$response->push(['error' => 'Error deleting location.']);
			$statusCode = 404;
		} finally {
			return response()->json($response, $statusCode)->header('Access-Control-Allow-Origin', '*')->header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
		}
	}
}

