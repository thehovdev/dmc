<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, ...$guards)
    {
        foreach ($guards as $guard) {
            if (Auth::guard($guard)->check()) {
                if (Auth::guard($guard)->user()->role->name == 'admin') {
                    return redirect()->route('admin.index');
                } else {
                    return redirect()->route('cabinet.index');
                }
            }
        }

        return $next($request);
    }
}
