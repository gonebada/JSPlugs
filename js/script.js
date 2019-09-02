'use strict';
// $('.main-carousel').flickity({
//     // options
//     cellAlign: 'left',
//     contain: true
// });


// external js: flickity.pkgd.js

var $carousel = $('.carousel').flickity({
  imagesLoaded: true,
  percentPosition: false,
  //disable dots
  pageDots: false,
  fade: true,
  //after refreshing last img
  hash: true,
});
//Select first one
document.getElementById("restart").addEventListener("click", function(){
$carousel.flickity( 'select', 0, false, true );
});
