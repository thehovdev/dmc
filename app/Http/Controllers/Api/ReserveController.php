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
        ReserveService $reserveService,
        AuthService $authService
    ) {
        $loggedAccount = $authService->loggedAccount();

        if($loggedAccount->role->name == 'operator') {
            $result = $reserveService->getReserves($request);
        } elseif($loggedAccount->role->name == 'user') {
            $result = $reserveService->getReservesByUser($request);
        }

        return response()->json($result);
    }

    // get declined user reservations (declined)
    public function declined(
        ReserveService $reserveService,
        Request $request
    ) {
        // declined user reservation by current operator
        $result = $reserveService->getDeclinedReserves($request);

        // return result
        return response()->json($result);
    }

    // get responded user reservations (responded)
    public function responded (
        ReserveService $reserveService,
        Request $request
    ) {
        // responded user reservation by current operator
        $result = $reserveService->getRespondedReserves($request);

        // return result
        return response()->json($result);
    }

    public function respondedByUser (
        ReserveService $reserveService,
        Request $request
    ) {
        // responded user reservation by current operator
        $result = $reserveService->getRespondedReservesByUser($request);

        // return result
        return response()->json($result);
    }


    public function show(
        ReserveService $reserveService, 
        Reserve $reserve
    ) {
        $result = $reserveService->getReserve($reserve);

        return response()->json($reserve);
    }

    public function showResponded(
        ReserveService $reserveService, 
        Reserve $reserve
    ) {
        $result = $reserveService->getRespondedReserve($reserve);

        return response()->json($reserve);
    }

    public function showByUser(
        ReserveService $reserveService, 
        Reserve $reserve,
        Request $request
    ) {
        $result = $reserveService->getReserveByUser($reserve, $request);

        return response()->json($reserve);
    }

    // store request from user in application main page
    public function store(
        ReservePostReq $request, 
        ReserveService $reserveService
    ) {

        // create and save user reservation to database
        $result = $reserveService->store($request);

        // return result
        return response()->json($result);

    }

    // decline user reservation
    public function decline(
        Reserve $reserve, 
        ReserveService $reserveService
    ) {
        // decline user reservation by current operator
        $result = $reserveService->decline($reserve);

        // return result
        return response()->json($result);
    }

    // restore user reservation
    public function restore(
        Reserve $reserve, 
        ReserveService $reserveService
    ) {
        // decline user reservation by current operator
        $result = $reserveService->restore($reserve);

        // return result
        return response()->json($result);
    }

    public function respond(
        Reserve $reserve,
        RespondReserveReq $request,
        ReserveService $reserveService 
    ) {
        // decline user reservation by current operator
        $result = $reserveService->respond($reserve, $request);

        // return result
        return response()->json($result);
    }

    public function updateRespond(
        Reserve $reserve,
        RespondReserveReq $request,
        ReserveService $reserveService
    ) {
        // update responded proposal by operator
        $result = $reserveService->updateRespond($reserve, $request);

        // return result
        return response()->json($result);
    }


    public function getStepParameters(
        ReserveService $reserveService
    ) {
        $result = $reserveService->getStepParameters();

        // return result
        return response()->json($result);
    }
}
