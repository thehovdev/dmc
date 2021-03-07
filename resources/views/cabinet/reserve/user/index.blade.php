@extends('layouts.cabinet')

@section('content')
    <section class="cabinet-content">
        <div class="row justify-content-center">
            <div class="col-sm-12">
                <div id="root" class="user-requests-table"></div>
                <img src="{{ asset('images/loader.gif') }}" class="loader">
            </div>
        </div>
    </section>

@endsection
