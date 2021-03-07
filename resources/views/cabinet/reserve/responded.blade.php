@extends('layouts.cabinet')

@section('content')
    <h4 class="py-2">@lang('main.responded')</h4>

    <section class="cabinet-content">
        <div class="row justify-content-center">
            <div class="col-sm-12">
                <div id="root" class="responded-requests-table"></div>
                <img src="{{ asset('images/loader.gif') }}" class="loader">
            </div>
        </div>
    </section>

@endsection
