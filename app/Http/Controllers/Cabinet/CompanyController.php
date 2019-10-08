<?php

namespace App\Http\Controllers\Cabinet;

use stdClass;
use App\Company;
use Illuminate\Http\Request;
use App\Services\CompanyService;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreateCompanyReq;

class CompanyController extends Controller
{
    public function index() {
        return view('cabinet.company.index');
    }
 
    public function create() {
        return view('cabinet.company.create');
    }

}
