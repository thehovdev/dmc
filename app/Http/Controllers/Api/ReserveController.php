<?php

namespace App\Http\Controllers\Api;

use stdClass;
use App\Reserve;
use App\Services\ReserveService;
use App\Http\Requests\ReservePostReq;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;



class ReserveController extends Controller
{
    public function store(ReserveService $reserveService, ReservePostReq $request) {

        // create and save user reservation to database
        $result = $reserveService->store($request);

        // return result
        return response()->json($result);

    }
}
