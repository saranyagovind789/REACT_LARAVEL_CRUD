<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models\ApiData;

class ApiController extends Controller
{
    function index(){
        $collection = Http::get("https://reqres.in/api/books");
       
        return view('apiData', ['collection' => $collection['data']]); 
    }

    function indexSorting(){
        $array = Http::get("https://reqres.in/api/books");
      
      
        $collection = json_decode($array, true);
        usort($collection['data'], function($a, $b) {return $a['name'] <=> $b['name'];});

        return view('apiData', ['collection' => $collection['data']]);

      
    }
}
