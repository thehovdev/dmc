<div class="row">
    <div class="col-sm-12">
        <nav class="navbar navbar-expand-lg navbar-light bg-light main-navbar">
            <a class="navbar-brand" href="#">@lang('main.navigation')</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav ml-auto">                                    

                    <li class="nav-item">
                        <a class="nav-link">
                            {{ Auth::guard('operator')->user()->email }}
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('cabinet.reserve.index') }}">
                            @lang('main.pending')
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('cabinet.reserve.responded') }}">
                            @lang('main.responded')
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('cabinet.reserve.declined') }}">
                            @lang('main.declined')
                        </a>
                    </li>
                    
                    <!-- Profile -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            @lang('main.profile')
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="{{ route('logout') }}">@lang('auth.logout')</a>
                        </div>                       
                    </li>
                </ul>
            </div>
        </nav>
        <hr>
    </div>
</div>