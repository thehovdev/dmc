@extends('layouts/app')

@section('content')
  
<div class="intro">

        @if(Auth::guard('web')->check() && Auth::guard('web')->user()->role->name == 'admin')
            <a href="/admin" class="btn btn-outline-light btn-sm btn-login">Admin panel</a>
        @elseif(Auth::guard('web')->check() && Auth::guard('web')->user()->role->name != 'admin')
            <a href="/cabinet" class="btn btn-outline-light btn-sm btn-login">Cabinet</a>
        @elseif(Auth::guard('operator')->check() && Auth::guard('operator')->user()->role->name == 'operator')
            <a href="/cabinet" class="btn btn-outline-light btn-sm btn-login">Cabinet</a>
        @endif

        @if(!Auth::guard('web')->check() && !Auth::guard('operator')->check())
            <a href="/login" class="btn btn-outline-light btn-sm btn-login">Log in</a>
            <a href="/register" class="btn btn-outline-light btn-sm btn-register">Register</a>
        @endif




        {{-- @if(!Auth::guard('web')->check() || !Auth::guard('operator')->check())
            <a href="/login" class="btn btn-outline-light btn-sm btn-login">Log in</a>
        @else

            @if(Auth::guard('web')->check())
                <a href="/cabinet" class="btn btn-outline-light btn-sm btn-login">Cabinet</a>
                @if(Auth::guard('web')->user()->role->name == 'admin')
                    <a href="/admin" class="btn btn-outline-light btn-sm btn-login">Admin panel</a>
                @else
                    <a href="/cabinet" class="btn btn-outline-light btn-sm btn-login">Cabinet</a>
                @endif
            @endif
               
            @if(Auth::guard('operator')->check())
                <a href="/cabinet" class="btn btn-outline-light btn-sm btn-login">Cabinet</a>
            @endif

        @endif --}}



    <div class="intro-cover" id="root">
    </div>
</div>

@endsection