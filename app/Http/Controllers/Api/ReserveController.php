<?php

namespace App\Http\Controllers\Api;

use stdClass;
use App\User;
use App\Operator;
use App\Reserve;
use App\DeclinedReserve;
use App\RespondedReserve;
use App\HotelStar;
use App\CuisineType;
use App\Transfer;
use App\Services\AuthService;
use App\Services\ReserveService;
use App\Http\Requests\ReservePostReq;
use App\Http\Requests\RespondReserveReq;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ReserveController extends Controller
{

    // get all user reservations (pending)
    public function index(
        Request $request, 
        AuthService $authService, 
        ReserveService $reserveService) 
    {
        $result = $reserveService->getReserves($request, $authService);

        return response()->json($result);
    }

    // get declined user reservations (declined)
    public function declined(
        ReserveService $reserveService,
        AuthService $authService,
        Request $request
    ) {
        // declined user reservation by current operator
        $result = $reserveService->getDeclinedReserves($authService, $request);

        // return result
        return response()->json($result);
    }

    // get responded user reservations (responded)
    public function responded (
        ReserveService $reserveService,
        AuthService $authService,
        Request $request
    ) {
        // responded user reservation by current operator
        $result = $reserveService->getRespondedReserves($authService, $request);

        // return result
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

    public function showResponded(
        ReserveService $reserveService, 
        Reserve $reserve, 
        HotelStar $hotelStar, 
        CuisineType $cuisineType,
        Transfer $transfer,
        AuthService $authService
    ) {
        $result = $reserveService->getRespondedReserve($reserve, $hotelStar, $cuisineType, $transfer, $authService);

        return response()->json($reserve);
    }

    // store request from user in application main page
    public function store(ReserveService $reserveService, ReservePostReq $request) 
    {

        // create and save user reservation to database
        $result = $reserveService->store($request);

        // return result
        return response()->json($result);

    }

    // decline user reservation
    public function decline(
        Reserve $reserve, 
        ReserveService $reserveService, 
        AuthService $authService
    ) {
        // decline user reservation by current operator
        $result = $reserveService->decline($reserve, $authService);

        // return result
        return response()->json($result);
    }

    // restore user reservation
    public function restore(
        Reserve $reserve, 
        ReserveService $reserveService, 
        AuthService $authService
    ) {
        // decline user reservation by current operator
        $result = $reserveService->restore($reserve, $authService);

        // return result
        return response()->json($result);
    }

    public function respond(
        Reserve $reserve,
        RespondReserveReq $request,
        ReserveService $reserveService, 
        AuthService $authService
    ) {
        // decline user reservation by current operator
        $result = $reserveService->respond($reserve, $request, $authService);

        // return result
        return response()->json($result);
    }

    public function updateRespond(
        Reserve $reserve,
        RespondReserveReq $request,
        ReserveService $reserveService, 
        AuthService $authService
    ) {
        // update responded proposal by operator
        $result = $reserveService->updateRespond($reserve, $request, $authService);

        // return result
        return response()->json($result);
    }
}
