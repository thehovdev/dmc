@extends('layouts/app')

@section('content')
  

<?php echo '<pre>';var_dump(session()->all()); ?>

@if (session('status'))
    <div class="alert alert-success">
        {{ session('status') }}
    </div>
@endif

@endsection