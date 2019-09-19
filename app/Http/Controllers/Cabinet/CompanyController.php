<?php

namespace App\Http\Controllers\Cabinet;

use stdClass;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreateCompanyReq;
use Illuminate\Support\Facades\Storage;

class CompanyController extends Controller
{
    public function index() {
        return view('cabinet.company.index');
    }

    public function create() {
        return view('cabinet.company.create');
    }

    // public function store(CreateCompanyReq $request) {
    public function store(Request $request) {
        // $request = (object)$request;
        
        $result = new stdClass;
        $result->status = 1;
        $result->message = 'success';

        $logo = $request->file('logo');

        $path = Storage::putFile('company/logo', $logo);



        // $result->param1 = $request->param1;
        // $result->param2 = $request->param2;

        return response()->json($result);
    }

}
