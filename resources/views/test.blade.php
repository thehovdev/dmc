@extends('layouts/app')

@section('content')
  
    <form action="{{ route('admin.company.store') }}" method="POST" enctype="multipart/form-data">
        @csrf
        <input type="file" name="logo">
        <button type="submit">Submit</button>
    </form>

@endsection