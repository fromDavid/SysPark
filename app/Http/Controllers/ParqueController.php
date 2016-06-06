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

class ParqueController extends Controller
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
			$parques = Parque::all();
			foreach($parques as $parque) {
				//add person to the collection
				$response->push([
					'id' => $parque->id,
					'data_Registo' => $parque->data_Registo,
					'local' => $parque->local,
					'piso' => $parque->piso,
					'lugar' => $parque->lugar,
					'id_Carro' => $parque->id_Carro,
					'criado_a' => $parque->criado_a
				]);
			}
		} catch (Exception $e) {
			//standard response for HTTP error requests
			$statusCode = 400; //Bad Request
		} finally {
			return response()->json($response, $statusCode)->header('Access-Control-Allow-Origin', '*')->header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
		}
	}
	

	public function show($user_id) {
		try {
			$statusCode = 200;
			$response = collect([]);

			$$parques = Parque::all();
			$$parques = Parque::where('id_Carro', $id_Carro)->get();
			foreach ($parques as $parque) {
				$response->push([
					'id' => $parque->id,
					'data_Registo' => $parque->data_Registo,
					'local' => $parque->local,
					'piso' => $parque->piso,
					'lugar' => $parque->lugar,
					'id_Carro' => $parque->id_Carro,
					'criado_a' => $parque->criado_a
				]);
			}

		} catch (Exception $e) {
			$response->push(['error' => 'Location not found.']);
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
			
			$parques = Parque::create();
			$response->push(['created' => 'Location created successfully.']);
		} catch (Exception $e) {
			$response->push(['error' => 'Error creating Location.']);
			$statusCode = 404;
		} finally {
			return response()->json($response, $statusCode)->header('Access-Control-Allow-Origin', '*')->header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
		}
	}
	
	//to be continued... (or not)
	public function update(Request $request, $id) {
		try {
			$statusCode = 200;
			$response = collect([]);
			
			$parques = Parque::findOrFail($id);
			$parques->fill($request->all())->save();
			$response->push(['updated' => 'Location updated successfully.']);
		} catch (Exception $e) {
			$response->push(['error' => 'Error updating Location.']);
			$statusCode = 404;
		} finally {
			return response()->json($response, $statusCode)->header('Access-Control-Allow-Origin', '*')->header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
		}
	}
	
	//to be continued... (or not)
	public function destroy($id) {
		try {
			$statusCode = 200;
			$response = collect([]);
			
			$parques = Parque::findOrFail($id);
			$parques->delete();
			$response->push(['success' => 'Location deleted successfully.']);
		} catch (Exception $e) {
			$response->push(['error' => 'Error deleting location.']);
			$statusCode = 404;
		} finally {
			return response()->json($response, $statusCode)->header('Access-Control-Allow-Origin', '*')->header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
		}
	}
}

