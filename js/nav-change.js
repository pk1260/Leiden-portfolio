const hero_section = $('#hero').offset().top;
const detection = $('#about').offset().top;
var a_tags = $('.nav__links li a, .cta, .logo img');
var navbar = $('#navbar');
var logo = $('.logo img');

$(document).scroll(function() {
    var scrollPos = $(document).scrollTop();
    if (scrollPos >= hero_section && scrollPos < detection) {
        $(a_tags).removeClass('active_a');
        $(navbar).removeClass('active_bar');
        $(logo).removeClass('active_logo');
    } else if (scrollPos >= detection) {
        $(a_tags).addClass('active_a');
        $(navbar).addClass('active_bar');
        $(logo).addClass('active_logo');
    }
});