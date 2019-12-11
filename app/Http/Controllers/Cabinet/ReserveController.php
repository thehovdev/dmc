<?php

namespace App\Http\Controllers\Cabinet;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ReserveController extends Controller
{
    public function index() {
        return view('cabinet.reserve.index');
    } 

    public function declined() {
        return view('cabinet.reserve.declined');
    } 

    public function responded() {
        return view('cabinet.reserve.responded');
    } 

    public function userReserves() {
        return view('cabinet.reserve.user.index');
    }
}
