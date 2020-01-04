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
            <a href="{{ route('admin.company.index') }}" class="btn btn-outline-light btn-sm btn-login">
                @lang('main.admin')
            </a>
        @elseif(Auth::guard('web')->check() && Auth::guard('web')->user()->role->name != 'admin')
            <a href="{{ route('cabinet.reserve.user.index') }}" class="btn btn-outline-light btn-sm btn-login">
                @lang('main.cabinet')
            </a>
        @elseif(Auth::guard('operator')->check() && Auth::guard('operator')->user()->role->name == 'operator')
            <a href="{{ route('cabinet.reserve.index') }}" class="btn btn-outline-light btn-sm btn-login">
                @lang('main.cabinet')
            </a>
        @endif

        @if(!Auth::guard('web')->check() && !Auth::guard('operator')->check())
            <a href="/login" class="btn btn-outline-light btn-sm btn-login">@lang('auth.login')</a>
            <a href="/register" class="btn btn-outline-light btn-sm btn-register">@lang('auth.register')</a>
        @endif

        @if(Request::has('req') == 1 && Request::get('req') == 'create') 
            <script> 
                var createRequestFromCabinet = 1;
            </script>
        @endif

    <div class="intro-cover" id="root">
    </div>
</div>

@endsection