<?php

namespace App\Services;

use stdClass;
use App\Role;
use App\User;
use App\Operator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthService
{
    protected $user;
    protected $operator;
    protected $result;

    // type hint dependency injection
    public function __construct(
        User $user,
        Operator $operator
    ) {
        $this->user = $user;
        $this->operator = $operator;
        $this->result = new stdClass;
    }


    public function loggedUser()
    {
        if (Auth::guard('web')->check()) return Auth::guard('web')->user();
        return null;
    }

    public function loggedOperator()
    {
        if (Auth::guard('operator')->check()) return Auth::guard('operator')->user();
        return null;
    }


    public function loggedAccount()
    {
        if (Auth::guard('web')->check()) return Auth::guard('web')->user();
        if (Auth::guard('operator')->check()) return Auth::guard('operator')->user();
        return null;
    }
}