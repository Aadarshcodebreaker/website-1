$(window).on("scroll",function() {
    var parallax = $(".parallax-img");
    var scrollposition = $(this).scrollTop();
    parallax.css("transform","translateY("+scrollposition*0.5+"px"+ ")");
});