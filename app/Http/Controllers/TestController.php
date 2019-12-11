<?php

namespace App\Http\Controllers;

use App\Company;
use App\Services\CompanyService;
use App\Mail\UserRespondedReserves;
use Illuminate\Http\Request;

use Carbon\Carbon;
use App\Services\AuthService;
use App\Reserve;
use Illuminate\Support\Facades\Mail;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;


class TestController extends Controller
{
    public function index() {
        echo "You find a secret page ! Congratulations !";
    }
}
