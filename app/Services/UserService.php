<?php

namespace App\Services;

use stdClass;
use App\Role;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;

class UserService
{
    protected $user;
    protected $result;

    // type hint dependency injection
    public function __construct(
        User $user
    ) {
        $this->user = $user;
        $this->result = new stdClass;
    }


    public function destroy(User $user) {

        if(Auth::user()->id != $user->id) {
            $user->delete();
            
            $this->result->status = 1;
            $this->result->message = 'success';
        } else {
            $this->result->status = 0;
            $this->result->message = 'Admin does not can deactivate yourself';
        }



        return $this->result;
    }

    public function restore(User $user) {
        $user->restore();

        $this->result->status = 1;
        $this->result->message = 'success';

        return $this->result;
    }

    public function getUsers(Request $request, $trashed = false) {

        if($trashed == false) {
            if(!isset($request->page)) {
                $this->result->users = $this->user->with('role')->orderByDesc('id')->get();
            } else {
                $this->result->users = $this->user->with('role')->orderByDesc('id')->paginate(10);
            }
        } else {
            if(!isset($request->page)) {
                $this->result->users = $this->user->withTrashed()->with('role')->orderByDesc('id')->get();
            } else {
                $this->result->users = $this->user->withTrashed()->with('role')->orderByDesc('id')->paginate(10);
            }
        }

        $this->result->status = 1;
        $this->result->message = 'success';

        return $this->result;
    }

    public function getUser(User $user) {
        $this->result->status = 1;
        $this->result->message = 'success';
        $this->result->user = $user;
        $this->result->company = $user->company;

        return $this->result;
    }
 
}
