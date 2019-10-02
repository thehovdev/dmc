@extends('layouts.app')

@section('content')

    <script>
        let companies = @php echo $companies @endphp
    </script>

    <div class="row justify-content-center">
        <div class="col-sm-12">
            
            <div id="root" class="companies-table"></div>

            {{-- <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($companies as $company)
                        <tr>
                            <td>{{ $company->name }}</td>
                            <td>{{ $company->address }}</td>
                            <td>{{ $company->email }}</td>
                            <td>
                                @include('cabinet.includes.forms.actions', [
                                    'route' => 'cabinet.company',
                                    'id' => $company->id
                                ])
                            </td>
                        </tr>
                    @endforeach
                </tbody>
              </table> --}}





        </div>
    </div>

@endsection
