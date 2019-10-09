<a href="{{ route("$route.edit", $id) }}" class="btn btn-primary">Edit</a>

<form action="{{ route("$route.destroy", $id) }}" class="d-inline" method="POST">
    @csrf
    @method('DELETE')
    <button type="submit" class="btn btn-danger">Delete</button>
</form>