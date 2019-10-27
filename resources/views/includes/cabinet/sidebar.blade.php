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
  
        <li>
            <a href="{{ route('cabinet.reserve.index') }}">
                <i class="fas fa-address-card"></i> Client requests
            </a>
        </li>

        <li>
            <a href="{{ route('index') }}">
                <i class="fas fa-folder-plus"></i> Create request
            </a>
        </li>
    </ul>
</nav>