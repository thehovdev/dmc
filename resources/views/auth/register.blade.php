@extends('layouts.app')

@section('content')
<div class="container">

    <section class="registration-window">
        <div class="row">
            <div class="col-md-8 offset-2">
                <h1 class="text-center mt-3">Create your account</h1>
    
                <ul class="nav nav-pills mt-3" id="pills-tab" role="tablist">
                    <li class="nav-item w-50">
                        <a class="nav-link active" id="pills-personal-tab" data-toggle="pill" href="#pills-personal" role="tab" aria-controls="pills-personal" aria-selected="true">Personal Account</a>
                    </li>
                    <li class="nav-item w-50">
                        <a class="nav-link" id="pills-corporate-tab" data-toggle="pill" href="#pills-corporate" role="tab" aria-controls="pills-corporate" aria-selected="false">Corporate Account</a>
                    </li>
                </ul>
            </div>
        </div>
            
        <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-personal" role="tabpanel" aria-labelledby="pills-personal-tab">
                @include('auth.register.user')
            </div>
            <div class="tab-pane fade" id="pills-corporate" role="tabpanel" aria-labelledby="pills-corporate-tab">
                @include('auth.register.operator')
            </div>
        </div>
    </section>
</div>
@endsection
