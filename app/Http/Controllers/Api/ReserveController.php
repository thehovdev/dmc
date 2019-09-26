<?php

namespace App\Http\Controllers\Api;

use stdClass;
use App\Reserve;
use App\Services\ReserveService;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\ReservePostReq;



class ReserveController extends Controller
{
    public function store(
        ReservePostReq $request, // validator
        ReserveService $reserveService  // service
    ) {

        // get validated data from ReservePostReq
        $formData = (object)$request->formData;

        // create and save user reservation to database
        $result = $reserveService->store($formData);

        // return result
        return response()->json($result);
    }
}
