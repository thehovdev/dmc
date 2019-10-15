<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    |--------------------------------------------------------------------------
    | Login Controller Changelog by hovdev ( ! Readme ! )
    |--------------------------------------------------------------------------
    |
    | Next functions list, extends from AuthenticatesUsers::class, are modified for custom authentification
    | attemptLogin() modified
    | sendLoginResponse() modified
    | authenticated() modified
    | logout() modified
    | guard() modified
    | getGuardType() added
    |
    */

    use AuthenticatesUsers;

    // commented because redirect url handled in authenticated()
    // protected $redirectTo = '/cabinet';  

    public function __construct()
    {
        $this->middleware('guest:web,operator')->except('logout');
    }

    protected function attemptLogin(Request $request)
    {
        return $this->guard($request)->attempt(
            $this->credentials($request), $request->filled('remember')
        );
    }

    protected function sendLoginResponse(Request $request)
    {
        $request->session()->regenerate();

        $this->clearLoginAttempts($request);

        return $this->authenticated($request, $this->guard($request)->user())
                ?: redirect()->intended($this->redirectPath());
    }

    protected function authenticated(Request $request, $user)
    {
        if ($user->role->name == 'admin') {
            return redirect()->intended('/admin');
        } else {
            return redirect()->intended('/cabinet');
        }
    }
    
    public function logout(Request $request)
    {
        $this->guard($request)->logout();

        $request->session()->invalidate();

        return $this->loggedOut($request) ?: redirect('/');
    }

    protected function guard(Request $request)
    {
        return Auth::guard($this->getGuardType($request));
    }

    public function getGuardType(Request $request) 
    {
        return $request->filled('corporate') ? 'operator' : 'web';
    }

}
