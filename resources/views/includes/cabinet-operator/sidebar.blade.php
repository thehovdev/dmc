<!-- Sidebar  -->
<nav id="sidebar">
    <a href="{{ route('index') }}">
        <div class="sidebar-header">
            <h3>{{ config()->get('app.name')}}</h3>
        </div>
    </a>

    <ul class="list-unstyled components">
        <li>
            <a href="{{ route('cabinet.reserve.index') }}">
                <i class="fas fa-address-card"></i> @lang('main.pending')
            </a>
        </li>
        <li>
            <a href="{{ route('cabinet.reserve.responded') }}">
                <i class="fas fa-address-card"></i> @lang('main.responded')
            </a>
        </li>
        <li>
            <a href="{{ route('cabinet.reserve.declined') }}">
                <i class="fas fa-address-card"></i> @lang('main.declined')
            </a>
        </li>
        <li>
            <a href="{{ route('index') }}">
                <i class="fas fa-folder-plus"></i> @lang('main.create_request')
            </a>
        </li>
    </ul>
</nav>