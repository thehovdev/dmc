@foreach($dependencies as $key => $value)
    <script>
         let {!! $key!!} = {!! $value !!}     
    </script>
@endforeach