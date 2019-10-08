<?php

namespace App\Http\Controllers\Cabinet;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ContactPersonController extends Controller
{
    public function index() {
        return view('cabinet.contactperson.index');
    }

    public function create() {
        return view('cabinet.contactperson.create');
    }
}
