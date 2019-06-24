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
    $(".tristan").on('click', function(event) {
        $("#head-page").removeClass('hidden');
        $("#about-page").addClass('hidden');
        $("#work-page").addClass('hidden');
        $(".name").html('Tristan Favor');
        event.preventDefault();
    });
    $(".about").on('click', function(event) {
        $("#head-page").addClass('hidden');
        $("#about-page").removeClass('hidden');
        $("#work-page").addClass('hidden');
        $(".name").html('About');
        event.preventDefault();
    });
    $(".work").on('click', function(event) {
        $("#head-page").addClass('hidden');
        $("#about-page").addClass('hidden');
        $("#work-page").removeClass('hidden');
        $(".name").html('Work');
        event.preventDefault();
    });
})

