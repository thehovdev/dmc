<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

use App\Company;
use App\Operator;
use App\Services\CompanyService;
use App\Services\OperatorService;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreateOperatorReq;
use App\Http\Requests\UpdateOperatorReq;


class OperatorController extends Controller
{
 /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, OperatorService $operatorService)
    {
        $result = $operatorService->getOperators($request);

        return response()->json($result);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(
        CreateOperatorReq $request,
        OperatorService $operatorService
    ) {

        $result = $operatorService->store($request);

        return response()->json($result);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Operator $operator, OperatorService $operatorService)
    {
        $result = $operatorService->getOperator($operator);

        return response()->json($operator);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(
        OperatorService $operatorService,
        UpdateOperatorReq $request,
        Operator $operator
    ) {
        $result = $operatorService->update($request, $operator);

        return response()->json($result);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Operator $operator, OperatorService $operatorService)
    {
        $result = $operatorService->destroy($operator);

        return response()->json($result);
    }
}
