@extends('layouts.app')

@section('content')
<div class="container">
    <section class="registration-window">
        <div class="row">
            <div class="col-md-8 offset-2">
                <h1 class="text-center mt-3">@lang('auth.create_account')</h1>             

                <div class="alert alert-success" role="alert">
                    <h4 class="alert-heading">@lang('auth.welldone')</h4>
                    <p>@lang('auth.successAuthTitle')</p>
                    <hr>
                    <p class="mb-0">@lang('auth.successAuthContent')</p>
                </div>

                <a href="{{ route('index') }}" class="btn btn-primary">@lang('main.backToHome')</a>
            </div>
        </div>
    </section>
</div>
@endsection
