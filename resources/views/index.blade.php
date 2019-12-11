@extends('layouts/app')

@section('content')
  
<div class="intro">
        <div class="language-bar">
            @foreach (config('app.locales') as $locale)
                <a href="/setlocale/{{ $locale }}" class="btn btn-outline-light btn-sm mx-1">
                    {{ strtoupper($locale) }}
                </a>
            @endforeach
        </div>

        @if(Auth::guard('web')->check() && Auth::guard('web')->user()->role->name == 'admin')
            <a href="/admin" class="btn btn-outline-light btn-sm btn-login">@lang('main.admin')</a>
        @elseif(Auth::guard('web')->check() && Auth::guard('web')->user()->role->name != 'admin')
            <a href="/cabinet" class="btn btn-outline-light btn-sm btn-login">@lang('main.cabinet')</a>
        @elseif(Auth::guard('operator')->check() && Auth::guard('operator')->user()->role->name == 'operator')
            <a href="/cabinet" class="btn btn-outline-light btn-sm btn-login">@lang('main.cabinet')</a>
        @endif

        @if(!Auth::guard('web')->check() && !Auth::guard('operator')->check())
            <a href="/login" class="btn btn-outline-light btn-sm btn-login">@lang('auth.login')</a>
            <a href="/register" class="btn btn-outline-light btn-sm btn-register">@lang('auth.register')</a>
        @endif

    <div class="intro-cover" id="root">
    </div>
</div>

@endsection