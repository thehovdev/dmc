<?php

namespace App\Http\Controllers\Api;

use stdClass;
use App\Company;
use App\ContactPerson;
use App\Operator;
use Illuminate\Http\Request;
use App\Services\CompanyService;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreateCompanyReq;
use App\Http\Requests\UpdateCompanyReq;

class CompanyController extends Controller
{
    public function __construct() {
        // Middleware only applied to these methods
        $this->middleware('auth.admin');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, CompanyService $companyService)
    {
        $result = new stdClass;
        $result->status = 1;
        $result->message = 'success';
        $result->companies = $companyService->getCompanies($request, true);

        return response()->json($result);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CompanyService $companyService, CreateCompanyReq $request)
    {
        $this->middleware('auth.admin');

        $result = $companyService->store($request);

        return response()->json($result);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Company $company)
    {
        return response()->json($company);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Company $company, UpdateCompanyReq $request, CompanyService $companyService)
    {
        $this->middleware('auth.admin');

        $result = $companyService->update($company, $request);

        return response()->json($result);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Company $company, ContactPerson $contactPerson, Operator $operator, CompanyService $companyService)
    {
        $this->middleware('auth.admin');

        $result = $companyService->destroy($company, $contactPerson, $operator);

        return response()->json($result);
    }

    public function restore($id, ContactPerson $contactPerson, Operator $operator, CompanyService $companyService)
    {
        $this->middleware('auth.admin');

        $company = Company::withTrashed()->find($id);

        $result = $companyService->restore($company, $contactPerson, $operator);

        return response()->json($result);
    }
}
