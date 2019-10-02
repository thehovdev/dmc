@extends('layouts.app')

@section('content')

    @include('includes.scripts.react', [
        'dependencies' => [
            'company' => $company
        ]
    ])
    {{-- <script>
        let company = @php echo $company @endphp
    </script> --}}

    <div class="row justify-content-center">
        <div class="col-sm-12">
            <div class="row justify-content-center">
                <div class="col-sm-12">
                    <div class="edit-company-form" id="root">
        
                    </div>
                </div>
            </div>

        </div>
    </div>

@endsection
