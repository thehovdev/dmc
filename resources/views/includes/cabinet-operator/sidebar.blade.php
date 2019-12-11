<!-- Sidebar  -->
<nav id="sidebar">
    <a href="{{ route('cabinet.index') }}">
        <div class="sidebar-header">
            <h3>DMC project</h3>
        </div>
    </a>

    <ul class="list-unstyled components">
        <li>
            <a href="{{ route('cabinet.reserve.index') }}">
                <i class="fas fa-address-card"></i> Pending
            </a>
        </li>
        <li>
            <a href="{{ route('cabinet.reserve.responded') }}">
                <i class="fas fa-address-card"></i> Responded
            </a>
        </li>
        <li>
            <a href="{{ route('cabinet.reserve.declined') }}">
                <i class="fas fa-address-card"></i> Declined
            </a>
        </li>
        <li>
            <a href="{{ route('index') }}">
                <i class="fas fa-folder-plus"></i> Create request
            </a>
        </li>
    </ul>
</nav>