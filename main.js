$(function navbarToggle() {
    $(".navbar-toggle").on('click', function(event) {
      $("li").toggleClass("hidden");
      $(".logo").toggleClass("hidden");
      $("nav").toggleClass('navbar');
      $("main").toggleClass('adjust-height');
      event.preventDefault();
    });
})

function showHeadPage () {
    $("#head-page").removeClass('hidden');
    $("#about-page").addClass('hidden');
    $("#work-page").addClass('hidden');
    $(".name").html('tristan favor');
}

function showAboutPage () {
    $("#head-page").addClass('hidden');
    $("#about-page").removeClass('hidden');
    $("#work-page").addClass('hidden');
    $(".name").html('about');
}

function showWorkPage () {
    $("#head-page").addClass('hidden');
    $("#about-page").addClass('hidden');
    $("#work-page").removeClass('hidden');
    $(".name").html('work');
}


function tristanLinkStyle() {
    $(".tristan>a").css('font-weight', 'bolder');
    $(".about>a").css('font-weight', '');
    $(".work>a").css('font-weight', '');
}

function aboutLinkStyle() {
    $(".about>a").css('font-weight', 'bolder');
    $(".tristan>a").css('font-weight', '');
    $(".work>a").css('font-weight', '');
}

function workLinkStyle() {
    $(".work>a").css('font-weight', 'bolder');
    $(".tristan>a").css('font-weight', '');
    $(".about>a").css('font-weight', '');
}


$(function handleLinks() {
    $(".tristan").on('click', function(event) {
        showHeadPage ()
        tristanLinkStyle()
        event.preventDefault();
    });
    $(".about").on('click', function(event) {
        showAboutPage ()
        aboutLinkStyle()
        event.preventDefault();
    });
    $(".work").on('click', function(event) {
        showWorkPage ()
        workLinkStyle()
        event.preventDefault();
    });
})

