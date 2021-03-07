@include('layouts/header')

@if(!Auth::check() || Request::is('/')) 
    <div>
        @yield('content')
    </div>
@else
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-2 px-0">
                @if(Auth::guard('operator')->check())
                    @include('includes.cabinet-operator.sidebar')
                @else
                    @include('includes.cabinet-user.sidebar')
                @endif
            </div>

            <div class="col-sm-10 py-2">
                @if(Auth::guard('operator')->check())
                    @include('includes.cabinet-operator.navbar')
                @else
                    @include('includes.cabinet-user.navbar')
                @endif
                
                @yield('content')
            </div>
        </div>
    </div>
@endif


@include('layouts/footer')