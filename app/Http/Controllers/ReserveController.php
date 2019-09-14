<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ReservePostReq;

use stdClass;
use App\Reserve;

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
