// 'use strict';
// // $('.main-carousel').flickity({
// //     // options
// //     cellAlign: 'left',
// //     contain: true
// // });


// // external js: flickity.pkgd.js

// var $carousel = $('.carousel').flickity({
//   imagesLoaded: true,
//   percentPosition: false,
//   //disable dots
//   pageDots: false,
//   fade: true,
//   //after refreshing last img
//   hash: true,
// });
// //Select first one
// document.getElementById("restart").addEventListener("click", function(){
// $carousel.flickity( 'select', 0, false, true );
// });



///     Google maps
// Initialize and add the map
window.initMap = function() {
  // The location of Uluru
  var warsaw = {lat: 52.237049, lng: 21.017532};
  var germany= {lat:53.488415,lng:9.142274};
  var uk ={lat:51.456600,lng:0.105600};
  // The map, centered at Warsaw
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 12, center: warsaw});
  // The marker, positioned at Uluru
  var markerOne = new google.maps.Marker({position: warsaw, map: map});


  markerOne.addListener('click',function(){
    infos.innerHTML = 'clicked on Poland';
  });

}