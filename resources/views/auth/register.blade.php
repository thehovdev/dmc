@extends('layouts.app')

@section('content')
<div class="container">

    <section class="registration-window">
        <div class="row">
            <div class="col-md-8 offset-2">
                <h1 class="text-center mt-3">@lang('auth.create_account')</h1>             
                <ul class="nav nav-pills mt-3" id="pills-tab" role="tablist">
                    <li class="nav-item w-50">
                        <a class="nav-link active" id="pills-personal-tab" data-toggle="pill" href="#pills-personal" role="tab" aria-controls="pills-personal" aria-selected="true">
                            @lang('auth.account_personal')
                        </a>
                    </li>
                    <li class="nav-item w-50">
                        <a class="nav-link" id="pills-corporate-tab" data-toggle="pill" href="#pills-corporate" role="tab" aria-controls="pills-corporate" aria-selected="false">
                            @lang('auth.account_corporate')
                        </a>
                    </li>
                </ul>
            </div>

            @if(session()->has('status'))
                <div class="alert alert-success">
                    asasdasdasd
                </div>
            @endif

        </div>
            
        <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-personal" role="tabpanel" aria-labelledby="pills-personal-tab">
                @include('auth.register.user')
            </div>
            <div class="tab-pane fade" id="pills-corporate" role="tabpanel" aria-labelledby="pills-corporate-tab">
                @include('auth.register.operator', ['companies' => $companies])
            </div>

            {{-- @if(session('status') == 'success')
                <div class="alert alert-success" role="alert">
                    <h4 class="alert-heading">Well done!</h4>
                    <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                    <hr>
                    <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                </div>
            @endif --}}

        </div>
    </section>
</div>
@endsection
