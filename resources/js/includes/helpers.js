export function getFormData(form) {
    var obj = {};
    var elements = form.querySelectorAll( "input, select, textarea" );

    for( var i = 0; i < elements.length; ++i ) {
        var element = elements[i];
        var id = element.id;
        var value = element.value;

        if( id ) {
            obj[ id ] = value;
        }
    }

    return obj;
    // return JSON.stringify( obj );
}

