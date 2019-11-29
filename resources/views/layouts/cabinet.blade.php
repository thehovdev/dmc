@include('layouts/header')

@if(!Auth::check() || Request::is('/')) 
    <div>
        @yield('content')
    </div>
@else
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-2 px-0">
                @include('includes.cabinet.sidebar')
            </div>

            <div class="col-sm-10 py-2">
                @include('includes.cabinet.navbar')

                @yield('content')
            </div>
        </div>
    </div>
@endif


@include('layouts/footer')