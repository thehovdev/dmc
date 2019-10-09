<!-- Sidebar  -->
<nav id="sidebar">
    <a href="{{ route('admin.index') }}">
        <div class="sidebar-header">
            <h3>DMC project</h3>
        </div>
    </a>

    <ul class="list-unstyled components">
        <li class="@if(Request::is('admin')) {{ 'active' }} @endif">
            <a href="#">
                <i class="fas fa-home"></i> Home
            </a>
        </li>

        <li class="@if(Request::is('admin/company*')) {{ 'active' }} @endif">
            <a href="#companiesSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                <i class="fas fa-industry"></i> Companies
            </a>
            <ul class="collapse list-unstyled" id="companiesSubmenu">
                <li><a href="{{ route('admin.company.index') }}">Companies List</a></li>
                <li><a href="{{ route('admin.company.create') }}">Create new company</a></li>
            </ul>
        </li>

        <li class="@if(Request::is('admin/contactperson*')) {{ 'active' }} @endif">
            <a href="#contactPersonsSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                    <i class="fas fa-address-book"></i> Contact Persons
            </a>
            <ul class="collapse list-unstyled" id="contactPersonsSubmenu">
                <li><a href="{{ route('admin.person.index') }}">Persons List</a></li>
                <li><a href="{{ route('admin.person.create') }}">Create new person</a></li>
            </ul>
        </li>
  
        <li>
            <a href="{{ route('index') }}">
                <i class="fas fa-folder-plus"></i> Create reserve
            </a>
        </li>
    </ul>
</nav>