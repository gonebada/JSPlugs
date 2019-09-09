'use strict';
const marker=[];
(function(){
var flicky = new Flickity( '.carousel', {
    imagesLoaded: true,
    percentPosition: false,
    //disable dots
    pageDots: false,
    fade: true,
    //after refreshing last img
    hash: true,
});
//Select first one
document.getElementById("restart").addEventListener("click", function () {
    flicky.select(0);
});

///     Google maps
var infos = document.getElementById('infos');

// Initialize and add the map
window.initMap = function () {
    // The location of Uluru
    var warsaw = {
        lat: 52.237049,
        lng: 21.017532
    };
    var germany = {
        lat: 53.488415,
        lng: 9.142274
    };
    var uk = {
        lat: 51.456600,
        lng: 0.105600
    };
    // The map, centered at Warsaw
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 10,
            center: objects[0].coords
        });
    // The marker, positioned at Uluru
    for (let i = 0; i < objects.length; i++) {
        const childArray = objects[i].coords;
//        var marker = new google.maps.Marker({
//            position: childArray,
//            map: map
//        });
        marker[i] = new google.maps.Marker({
            position: childArray,
            map: map
        });
        /// change carusel on click on map
        marker[i].addListener('click', function () {
            flicky.select(i);
            
        });
    };
    
flicky.on( 'change', function(index) {
    map.panTo(objects[index].coords);
    map.setZoom(15),
        {
        center: objects[index].coords,
    }
});


}
})();
