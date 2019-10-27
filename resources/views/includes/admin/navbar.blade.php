<div class="row">
    <div class="col-sm-12">
        <nav class="navbar navbar-expand-lg navbar-light bg-light main-navbar">
            <a class="navbar-brand" href="#">Navigation</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav ml-auto">                                    
                    <!-- Company -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            Companies
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="{{ route('admin.company.index') }}">List</a>
                            <a class="dropdown-item" href="{{ route('admin.company.create') }}">Create</a>
                        </div>
                    </li>

                    <!-- Conact Person -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            Contact Persons
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="{{ route('admin.person.index') }}">List</a>
                            <a class="dropdown-item" href="{{ route('admin.person.create') }}">Create</a>
                        </div>
                    </li>                
                    
                    <!-- Operator -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            Operators
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="{{ route('admin.operator.index') }}">List</a>
                            <a class="dropdown-item" href="{{ route('admin.operator.create') }}">Create</a>
                        </div>
                    </li>

                    <!-- Profile -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            Profile
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="{{ route('logout') }}">Logout</a>
                        </div>
                    </li>

                </ul>
            </div>
        </nav>
        <hr>
    </div>
</div>