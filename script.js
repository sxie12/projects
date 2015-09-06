// This is the JavaScript file

$(window).scroll(function() {
    var topOff = $(window).scrollTop();
    var opacityLevel = Math.max(0.6, 1 - topOff/800);
    $('.desktop_header_table').css("opacity", opacityLevel);
    $('.header').css("opacity", opacityLevel);
});

var hover = $('.header').hover(function() {
    $('.desktop_header_table').css("opacity", 1);
    $('.header').css("opacity", 1);
});


$(document).ready(hover);
