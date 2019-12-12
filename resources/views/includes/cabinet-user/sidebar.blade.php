<!-- Sidebar  -->
<nav id="sidebar">
    <a href="{{ route('index') }}">
        <div class="sidebar-header">
            <h3>{{config()->get('app.name')}}</h3>
        </div>
    </a>

    <ul class="list-unstyled components">
        {{-- <li class="@if(Request::is('admin')) {{ 'active' }} @endif">
            <a href="{{ route('cabinet.index') }}">
                <i class="fas fa-home"></i> Home
            </a>
        </li> --}}

        <li class="@if(Request::is('admin')) {{ 'active' }} @endif">
            <a href="{{ route('cabinet.reserve.user.index') }}">
                <i class="fas fa-suitcase"></i> @lang('main.myRequestList')
            </a>
        </li>

        <li>
            <a href="{{ route('index') }}">
                <i class="fas fa-folder-plus"></i> @lang('main.create_request')
            </a>
        </li>
    </ul>
</nav>