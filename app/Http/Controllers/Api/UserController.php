<?php

namespace App\Http\Controllers\Api;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\UserService;

class UserController extends Controller
{
    public function index(Request $request, UserService $userService)
    {
        $result = $userService->getUsers($request, true);

        return response()->json($result);
    }

    public function destroy(User $user, UserService $userService)
    {
        $result = $userService->destroy($user);

        return response()->json($result);
    }

    public function restore($id, UserService $userService)
    {
        $user = User::withTrashed()->find($id);

        $result = $userService->restore($user);

        return response()->json($result);
    }


}
