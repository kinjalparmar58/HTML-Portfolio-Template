$(document).ready(function () {
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        console.log(scroll);    
        if (scroll <= 50) {
            $(".sticky").addClass("stikyAdd");
        } else {
            $(".sticky").removeClass("stikyAdd");
        }
    });


//progressbar
var waypoint = new Waypoint({
    element: document.getElementById('exp-ID'),
    handler: function() {
        var p = document.querySelectorAll('.progress-bar');
        p[0].setAttribute("style", "width: 100%; transition: 1.4s all");
        p[1].setAttribute("style", "width: 95%; transition: 2.0s all");
        p[2].setAttribute("style", "width: 80%; transition: 1.2s all");
        p[3].setAttribute("style", "width: 90%; transition: 2.1s all");
    },
    offset: '90%'
});
});