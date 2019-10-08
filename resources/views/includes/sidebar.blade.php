<!-- Sidebar  -->
<nav id="sidebar">
    <a href="{{ route('cabinet.index') }}">
        <div class="sidebar-header">
            <h3>DMC project</h3>
        </div>
    </a>

    <ul class="list-unstyled components">
        <li class="active">
            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
            <ul class="collapse list-unstyled" id="homeSubmenu">
                <li><a href="#">Home 1</a></li>
            </ul>
        </li>

        <li>
            <a href="#companiesSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Companies</a>
            <ul class="collapse list-unstyled" id="companiesSubmenu">
                <li><a href="{{ route('cabinet.company.index') }}">Companies List</a></li>
                <li><a href="{{ route('cabinet.company.create') }}">Create new company</a></li>
            </ul>
        </li>

        <li>
            <a href="#contactPersonsSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Contact Person</a>
            <ul class="collapse list-unstyled" id="contactPersonsSubmenu">
                <li><a href="{{ route('cabinet.person.index') }}">Persons List</a></li>
                <li><a href="{{ route('cabinet.person.create') }}">Create new person</a></li>
            </ul>
        </li>


        <li>
            <a href="#">Contacts</a>
        </li>
        <li>
            <a href="{{ route('index') }}">Create reserve</a>
        </li>
    </ul>
</nav>