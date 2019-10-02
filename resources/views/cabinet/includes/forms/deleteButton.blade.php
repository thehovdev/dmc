<form action="{{ route($route, $id) }}" class="d-inline">
    @method('DELETE')
    <button type="submit" class="btn btn-danger">Delete</button>
</form>