<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class OperatorController extends Controller
{
    public function index() {
        return view('admin.operator.index');
    }
    public function create() {
        return view('admin.operator.create');
    }
}
