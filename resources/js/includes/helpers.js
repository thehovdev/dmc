export function getFormData(form) {
    var formId = form.id;
    var elements = form.querySelectorAll( "input, select, textarea" );

    switch (formId) {
        case 'reserve-form':
            var obj = {
                hotel_stars : null,
                transports : null,
                cuisines : null,
            };
            break;
    
        default:
            var obj = {};
    }



    for( var i = 0; i < elements.length; ++i ) {
        var element = elements[i];
        var prefix = false;

        // if(element.hasAttribute("type") 
        //     && element.getAttribute("type") == 'checkbox' 
        //     && element.checked == false
        // ) {
        //     var prefix = element.getAttribute('prefix');
        //     // continue
        // } 

        if(element.hasAttribute("type") 
            && element.getAttribute("type") == 'checkbox' 
        ) {
            var prefix = element.getAttribute('prefix');
        }

        console.log(prefix);


        var id = element.id;
        var value = element.value.trim();

        if( id ) {
            if(typeof prefix !== "undefined" && prefix != false) {
                if(element.checked == true) {
                    if(obj[ prefix ] == null)  obj[ prefix ] = [];
                    obj[ prefix ].push(value);
                }
            } else {
                if(value.length == 0) {
                    obj[ id ] = null;
                } else {
                    obj[ id ] = value;
                }
            }
        }

    }

    return obj;
}
