<?php

namespace App\Http\Controllers;

use App\Company;
use App\Services\CompanyService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;


class TestController extends Controller
{
    public function index(Company $company, CompanyService $companyService) {

        // deactivate function
        // $companyCount = 0;
        // $currentDate = date('Y-m-d 00:00:00');
        // $companies = $company
        //     ->where('status', 1)
        //     ->where('active_to', '<=', $currentDate)
        //     ->withTrashed()
        //     ->get();

        // foreach($companies as $company) {
        //     // deactivate company ( soft deletes )
        //     $companyService->destroy($company);
        //     $companyCount++;
        // }

        // return $companyCount;


        // restore function
        $companyCount = 0;
        $currentDate = date('Y-m-d 00:00:00');
        $companies = $company
            ->where('status', 0)
            ->where('active_from', '<=', $currentDate)
            ->where('active_to', '>', $currentDate)
            ->withTrashed()
            ->get();

        foreach($companies as $company) {
            // deactivate company ( soft deletes )
            $companyService->restore($company);
            $companyCount++;
        }

        return $companyCount;


    }
}
