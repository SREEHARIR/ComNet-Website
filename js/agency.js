/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Google Map settings 
var myOptions = {
    zoom: 16,
    scrollwheel: false,
    center: new google.maps.LatLng(8.548290, 76.938071),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [{
        "featureType": "water",
        "stylers": [{
            "visibility": "on"
        }, {
            "color": "#acbcc9"
        }]
    }, {
        "featureType": "landscape",
        "stylers": [{
            /*
                        "color": "#009FDA"*/
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
            "color": "#c5c6c6"
        }]
    }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
            "color": "#e4d7c6"
        }]
    }, {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{
            "color": "#fbfaf7"
        }]
    }, {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
            "color": "#c5dac6"
        }]
    }, {
        "featureType": "administrative",
        "stylers": [{
            "visibility": "on"
        }, {
            "lightness": 33
        }]
    }, {
        "featureType": "road"
    }, {
        "featureType": "poi.park",
        "elementType": "labels",
        "stylers": [{
            "visibility": "on"
        }, {
            "lightness": 20
        }]
    }, {}, {
        "featureType": "road",
        "stylers": [{
            "lightness": 20
        }]
    }]
};

var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
marker = new google.maps.Marker({
    map: map,
    draggable: false,
    animation: google.maps.Animation.DROP,
    position: {
        lat: 8.548290,
        lng: 76.938071
    }
});
marker.addListener('click', toggleBounce);

function toggleBounce() {
    // if (marker.getAnimation() !== null) {
    //     marker.setAnimation(null);
    // } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
   // }
}
