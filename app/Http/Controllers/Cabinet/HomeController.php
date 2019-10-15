<?php

namespace App\Http\Controllers\Cabinet;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    public function index() {
        dd(Auth::user());
        // dd(Auth::guard('operator')->user());
        dd('cabinet index');
    }

}
