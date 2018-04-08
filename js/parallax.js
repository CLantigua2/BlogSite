//run function when window scrolls
$(window).scroll(function() {
    parallax();
})

function parallax() {
    //holds window scroll value in a var
    var wScroll = $(window).scrollTop();
    //select parallax-bg class and modify position
    $('.parallax-bg').css('background-position', 'center ' + (wScroll * .35) + 'px')

}