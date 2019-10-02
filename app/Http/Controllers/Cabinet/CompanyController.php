<?php

namespace App\Http\Controllers\Cabinet;

use stdClass;
use Illuminate\Http\Request;
use App\Company;
use App\Services\CompanyService;
use App\Http\Requests\CreateCompanyReq;
use App\Http\Controllers\Controller;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(CompanyService $companyService) {
        $companies = $companyService->getCompanies();

        return view('cabinet.company.index')->with('companies', $companies);
    }

    public function getCompanies(CompanyService $companyService) {
        $result = $companyService->getCompanies();

        return response()->json($result);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function create() {
        return view('cabinet.company.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CompanyService $companyService, CreateCompanyReq $request) {
        $result = $companyService->store($request);

        return response()->json($result);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Company $company, CompanyService $companyService)
    {
        return view('cabinet.company.edit')->with('company', $company);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        dd($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Company $company, CompanyService $companyService)
    {
        $result = $companyService->destroy($company);

        return response()->json($result);
    }
}
