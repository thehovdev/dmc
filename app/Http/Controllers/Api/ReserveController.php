<?php

namespace App\Http\Controllers\Api;

use stdClass;
use App\Reserve;
use App\HotelStar;
use App\CuisineType;
use App\Transfer;
use App\Services\ReserveService;
use App\Http\Requests\ReservePostReq;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ReserveController extends Controller
{

    public function index(ReserveService $reserveService, Request $request) {
        $result = new stdClass;
        $result->status = 1;
        $result->message = 'success';
        $result->reserves = $reserveService->getReserves($request);

        return response()->json($result);
    }

    public function show(
        ReserveService $reserveService, 
        Reserve $reserve, 
        HotelStar $hotelStar, 
        CuisineType $cuisineType,
        Transfer $transfer
    ) {
        $result = $reserveService->getReserve($reserve, $hotelStar, $cuisineType, $transfer);

        return response()->json($reserve);
    }

    // store request from user in application main page
    public function store(ReserveService $reserveService, ReservePostReq $request) {

        // create and save user reservation to database
        $result = $reserveService->store($request);

        // return result
        return response()->json($result);

    }
}
