<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ContactPersonController extends Controller
{
    public function index() {
        return view('admin.contactperson.index');
    }

    public function create() {
        return view('admin.contactperson.create');
    }
}
