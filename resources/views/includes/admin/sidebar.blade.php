<!-- Sidebar  -->
<nav id="sidebar">
    <a href="{{ route('index') }}">
        <div class="sidebar-header">
            <h3>{{ config()->get('app.name')}}</h3>
        </div>
    </a>

    <ul class="list-unstyled components">
        {{-- <li class="@if(Request::is('admin')) {{ 'active' }} @endif">
            <a href="{{ route('admin.index') }}">
                <i class="fas fa-home"></i> @lang('main.home')
            </a>
        </li> --}}

        <li class="@if(Request::is('user')) {{ 'active' }} @endif">
            <a href="{{ route('admin.user.index') }}">
                <i class="fas fa-users"></i> @lang('main.users')
            </a>
        </li>

        <li class="@if(Request::is('admin/company*')) {{ 'active' }} @endif">
            <a href="#companiesSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                <i class="fas fa-industry"></i> @lang('main.companies')
            </a>
            <ul class="collapse list-unstyled" id="companiesSubmenu">
                <li><a href="{{ route('admin.company.index') }}">@lang('main.list')</a></li>
                <li><a href="{{ route('admin.company.create') }}">@lang('main.create')</a></li>
            </ul>
        </li>

        <li class="@if(Request::is('admin/contactperson*')) {{ 'active' }} @endif">
            <a href="#contactPersonsSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                    <i class="fas fa-user-tie"></i> @lang('main.contact_persons')
            </a>
            <ul class="collapse list-unstyled" id="contactPersonsSubmenu">
                <li><a href="{{ route('admin.person.index') }}">@lang('main.list')</a></li>
                <li><a href="{{ route('admin.person.create') }}">@lang('main.create')</a></li>
            </ul>
        </li>

        <li class="@if(Request::is('admin/operator*')) {{ 'active' }} @endif">
            <a href="#operatorsSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                <i class="fas fa-user-cog"></i> @lang('main.operators')
            </a>
            <ul class="collapse list-unstyled" id="operatorsSubmenu">
                <li><a href="{{ route('admin.operator.index') }}">@lang('main.list')</a></li>
                <li><a href="{{ route('admin.operator.create') }}">@lang('main.create')</a></li>
            </ul>
        </li>
  
        {{-- <li>
            <a href="{{ route('index') }}">
                <i class="fas fa-folder-plus"></i> @lang('main.create_request')
            </a>
        </li> --}}
    </ul>
</nav>