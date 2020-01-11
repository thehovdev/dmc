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
    public function index(Request $request) {
        echo "You find a secret page ! Congratulations !";

        // $request->session()->put('key', 'value');
        // $request->session()->flash('status', 'Task was successful!');


        return redirect('testpage')->with('status', 'Profile updated!');
    }

    public function testpage(Request $request) {
        
        return view('test');

    }

}
