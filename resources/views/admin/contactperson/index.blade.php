@extends('layouts.admin')

@section('content')

    <h4 class="py-2">@lang('main.contact_persons_list')</h4>

    <section class="admin-content">
        <div class="row justify-content-center">
            <div class="col-sm-12">
                <div id="root" class="contact-persons-table">
                </div>
                <img src="{{ asset('images/loader.gif') }}" class="loader">
            </div>
        </div>
    </section>

@endsection
