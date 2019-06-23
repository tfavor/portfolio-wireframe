$(function navbarToggle() {
    $(".navbar-toggle").on('click', function(event) {
      $("li").toggleClass("hidden");
      $(".logo").toggleClass("hidden");
      $("nav").toggleClass('navbar');
      $("main").toggleClass('adjust-height');
      event.preventDefault();
    });
})


$(function handleLinks() {
    $(".about").on('click', function(event) {
        $("#about-page").removeClass('hidden');
        $("#work-page").addClass('hidden');
        $("#contact-page").addClass('hidden');
        event.preventDefault();
    });
    $(".work").on('click', function(event) {
        $("#about-page").addClass('hidden');
        $("#work-page").removeClass('hidden');
        $("#contact-page").addClass('hidden');
        event.preventDefault();
    });
    $(".contact").on('click', function(event) {
        $("#about-page").addClass('hidden');
        $("#work-page").addClass('hidden');
        $("#contact-page").removeClass('hidden');
        event.preventDefault();
    });
})

function viewPort () {
    if (window.matchMedia('(min-width: 600px)').matches) {
        console.log('tablet');
    } else {
        console.log('phone');
    }
}
viewPort();