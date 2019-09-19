<?php

namespace App\Http\Controllers\Api;

use stdClass;
use App\Reserve;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\ReservePostReq;



class ReserveController extends Controller
{
    public function store(ReservePostReq $request, Reserve $reserve) {

        // get validated data from ReservePostReq
        $formData = (object)$request->formData;

        // create and save user reservation to database
        $result = $reserve->createReserve($formData);

        // return result
        return response()->json($result);
    }
}
