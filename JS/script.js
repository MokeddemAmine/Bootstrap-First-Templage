$(document).ready(function(){
    // height of the slider
    var winh = $(window).height(),
    upph = $('.upper-bar').innerHeight(),
    navh = $('.navbar').innerHeight();
    $('#landing ,.carousel-item').height(winh - upph - navh);

    // active li in featured work 
    $('.featured-work .nav li a').click(function(){
        $(this).addClass('myactive').parent().siblings().children().removeClass('myactive');
        $()
    })
    // show and hide imgs featured work relation with nav
    $('.featured-work .nav li').click(function(){
        if($(this).data('class') === 'all'){
            $('.featured-work-imgs .main-img').parent().fadeIn(1000);
        }
        else{
            $('.featured-work-imgs .main-img').parent().hide();
            $('.featured-work-imgs .main-img').filter($(this).data('class')).parent().fadeIn(1000);
        }
    })
    // tooltip code 
    $('[data-toggle="tooltip"]').tooltip();
    // popover code 
    $('[data-toggle="popover"]').popover();

})