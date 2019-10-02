@extends('layouts/app')

@section('content')
  
<div class="intro">
    <a href="/login" class="btn btn-outline-light btn-sm btn-login">
        @if(!Auth::user())
            Login
        @else
            Cabinet
        @endif
    </a>

    <div class="intro-cover" id="root">
    </div>
</div>

@endsection