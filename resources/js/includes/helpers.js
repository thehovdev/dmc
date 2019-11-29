import React, { Component } from 'react'

export function getFormData(form) {
    var formId = form.id;
    var elements = form.querySelectorAll( "input, select, textarea" );

    var obj = {};

    // switch (formId) {
    //     case 'reserve-form':
    //         var obj = {
    //             hotel_stars : null,
    //             transports : null,
    //             cuisines : null,
    //         };
    //         break;
    
    //     default:
    //         var obj = {};
    // }



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

export function showCheckedIcon(status = 'true') {
    if(status) {
        return <i className="fa-custom far fa-check-circle"></i>;
    } 
    return <i className="fa-custom fas fa-times-circle"></i>;
}

export function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

export function daysCount(startDate, endDate) {

    var currentDate = new Date();
    var endDate = new Date(endDate);
    var startDate = new Date(startDate);

    var diffTime = Math.abs(endDate - currentDate);
    var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

    if(endDate < currentDate || startDate > currentDate) diffDays = 0;

    return diffDays
}

export function getMultipleFields(request, prop) {

    if(prop in request) {

        let requestList = request[prop];
        let itemsList = '';

        requestList.map((item, index) => {
            if(requestList.length != index + 1 && requestList.length != 1) {
                itemsList = itemsList + item.name + ' / ';
            } else {
                itemsList = itemsList + item.name;
            }
        });

        return itemsList;
    } else {
        return null;
    }


    // if('hotel_stars' in request) {
    //     let hotel_stars = request.hotel_stars;
    //     hotel_stars_list = '';

    //     hotel_stars.map((item, index) => {
    //         if(hotel_stars.length != item.id && hotel_stars.length != 1) {
    //             hotel_stars_list = hotel_stars_list + item.name + ' / ';
    //         } else {
    //             hotel_stars_list = hotel_stars_list + item.name;
    //         }
    //     });
    // }

}
