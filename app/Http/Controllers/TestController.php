<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;


class TestController extends Controller
{
    public function test() {
        $pwd = Hash::make('myPassword');
        $pwdMd5 = md5('myPassword');

        dump('md5: ' . $pwdMd5);
        dump('hash: ' . $pwd);
    }
}
