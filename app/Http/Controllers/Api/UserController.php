<?php

namespace App\Http\Controllers\Api;

use stdClass;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\UserService;
use App\Services\AuthService;

class UserController extends Controller
{

    // type hint dependency injection
    public function __construct() {
        $this->result = new stdClass;

        // Middleware only applied to these methods
        $this->middleware('auth.admin', ['only' => [
            'index', 
            'destroy',
            'restore'
        ]]);
    }


    public function index(
        Request $request, 
        UserService $userService
    ) {
        $result = $userService->getUsers($request, true);

        return response()->json($result);
    }

    public function checkauth(
        AuthService $authService
    ) {
        $this->result->status = 0;
        $this->result->message = 'error, user not authenticated';

        if(!is_null($authService->loggedUser())) {
            if($authService->loggedUser()->role->name != 'admin') {
                if(!is_null($authService->loggedUser()->email_verified_at)) {
                    $this->result->status = 1;
                    $this->result->message = 'success';
                }
            } else {
                $this->result->status = 3;
                $this->result->message = 'admin logged';
            }
        } elseif (!is_null($authService->loggedOperator())) {
            $this->result->status = 2;
            $this->result->message = 'operator logged';
        }

        return response()->json($this->result);
    }

    public function destroy(
        User $user, 
        UserService $userService
    ) {
        $result = $userService->destroy($user);

        return response()->json($result);
    }

    public function restore(
        $id, 
        UserService $userService
    ) {
        $user = User::withTrashed()->find($id);

        $result = $userService->restore($user);

        return response()->json($result);
    }


}
