<?php

namespace App\Http\Controllers\Admin;

use stdClass;
use App\Company;
use Illuminate\Http\Request;
use App\Services\CompanyService;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreateCompanyReq;

class CompanyController extends Controller
{
    public function index() {
        return view('admin.company.index');
    }
 
    public function create() {
        return view('admin.company.create');
    }

}
