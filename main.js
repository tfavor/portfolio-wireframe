function getHeadPage() {
    $(".name").html("Tristan Favor")
    $(".main-content").html(`<p class="headline">Hi, I'm Tristan. I am a front-end web developer from Austin Texas with a passion for creating beautiful and robust web applications.</p>
    <p class="skills">skills include: <span class="technologies">
    <i class="fab fa-html5"><span class="html">  HTML</span></i>  <i class="fab fa-css3"><span class="css">  CSS</span></i>  <i class="fab fa-js-square"><span class="js">  JavaScript</span></i>
    </span>
    </p>`);
}

function getAboutPage() {
    $(".name").html("About")
    $(".main-content").html(` <p class="about-paragraph">I am currently enrolled in Thinkfull's full stack development Bootcamp. Programing developed into a passion of mine after learning all of the amazing ways I could express my creativity through design and problem-solving. I am most fond of JavaScript because of all the powerful built-in features it offers, as well as its flexibility for both front-end development and back-end.</p>
    <p class="about-paragraph">Outside of coding, my interests lie in the outdoors. Hiking, mountain biking, and snowboarding are just a few examples of activities you can find my indulging in throughout the year.</p>
    <h3>Get in touch </h3>
    <span class="contact-me"><a href="https://github.com/tfavor"><i class="fab fa-github"></i></a> <a href=""><i class="fab fa-linkedin"></i></a></span>`);
}

function getWorkPage() {
    $(".name").html("Projects")
    $(".main-content").html(`<div class="project-1">
    <img class="quiz-app" src="img (1).png" alt="screenshot of quiz app">
    <div class="project-description">
        <h2>Wildlife Quiz App</h2>
        <p>A short, fun, and educating quiz game with questions about nature and wildlife.</p>
        <a class="view-code" href="">
            <button>View Code</button>
        </a>
        <a class="view-site" href="">
            <button>View site</button>
        </a>
    </div>
</div>`);
}

function tristanLinkStyle() {
   
    $(".about>a").css('text-decoration', 'none');
    $(".work>a").css('text-decoration', 'none');
}

function aboutLinkStyle() {
    $(".about>a").css('text-decoration', 'underline');
    $(".logo").css('text-decoration', 'none');
    $(".work>a").css('text-decoration', 'none');
}

function workLinkStyle() {
    $(".work>a").css('text-decoration', 'underline');
    $(".logo").css('text-decoration', 'none');
    $(".about>a").css('text-decoration', 'none');
}


$(function handleLinks() {
    $(".logo").on('click', function(event) {
        getHeadPage();
        tristanLinkStyle()
        event.preventDefault();
    });
    $(".about").on('click', function(event) {
        getAboutPage();
        aboutLinkStyle()
        event.preventDefault();
    });
    $(".work").on('click', function(event) {
        getWorkPage();
        workLinkStyle()
        event.preventDefault();
    });
})

