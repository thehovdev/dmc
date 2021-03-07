@extends('layouts.admin')

@section('content')

    <h4 class="py-2">@lang('main.operators_list')</h4>

    <section class="admin-content">
        <div class="row justify-content-center">
            <div class="col-sm-12">
                <div id="root" class="company-operators-table"></div>
                <img src="{{ asset('images/loader.gif') }}" class="loader">
            </div>
        </div>
    </section>

@endsection
