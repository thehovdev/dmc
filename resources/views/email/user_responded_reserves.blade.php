<h1>Notification about reservations</h1>

<p>You have new responded reservations: {{ $todayReserve->responded_reserves->count() }}</p>

<p>Please log in to your <a href="{{ route('cabinet.reserve.user.index') }}">cabinet</a> for get more information</p>