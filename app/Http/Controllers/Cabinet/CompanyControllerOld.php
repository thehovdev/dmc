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
    public function index(CompanyService $companyService) {
        $companies = $companyService->getCompanies();

        return view('cabinet.company.index')->with('companies', $companies);
    }

    public function create() {
        return view('cabinet.company.create');
    }

    public function store(CompanyService $companyService, CreateCompanyReq $request) {
        $result = $companyService->store($request);

        return response()->json($result);
    }

}
