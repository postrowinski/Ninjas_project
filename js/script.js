document.addEventListener('DOMContentLoaded', function() {
    const handleAppsLinksClick = document.querySelectorAll('.slide-button-buy a');
    const footer = document.querySelector('footer');
    const footerImage = document.querySelector('.rugged-paper-upside-down');
    const footerHeight = footer.clientHeight;
    const navLinks = document.querySelectorAll('.js-nav-link');
    const mainHeight = document.querySelector('#js-main').clientHeight;
    const scrollTime = 700;

    window.addEventListener('resize', function () {
        var footerHeight = footer.clientHeight;
        footerImage.style.bottom = footerHeight + 'px';
    });

    //Prevent to moving website to top of the window after clicking
    handleAppsLinksClick.forEach(function (element) {
        element.addEventListener('click', function (event) {
            event.preventDefault();
        });
    });

    //Adding working navigation
    //After click on choose link window will slide to the top point of choose section
    // - adding event for each link
    // - prevent default scrolling
    // - get and save value of attribute href
    // - find id = attribute href
    // - get offset top of current selected id
    // - insert animation function and put value offset top as function argument
    navLinks.forEach(function (element) {
        element.addEventListener('click', function (e) {
            const getLink = this.getAttribute('href');
            const getSelectedSection = document.querySelector(getLink);
            const getoffsetTop = getSelectedSection.offsetTop;

            e.preventDefault();
            scrollingTop(getoffsetTop);
        });
    });

    //jQuery animation for scrolling whole document
    // - select both html and body and add them method animate witch has one argument
    // - function animate need at least two arguments: first it is object witch contains animated element, and second it's time
    function scrollingTop (top) {
        $('html, body').animate({
            scrollTop: top
        }, scrollTime);
    }

    $('.scroll-top-btn').hide();

    $('.scroll-top-btn').click(function () {
        const goTop = $('html, body').offset().top;
        scrollingTop(goTop);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > mainHeight / 2) {
            $('.scroll-top-btn').fadeIn();
        } else {
            $('.scroll-top-btn').fadeOut();
        }
    });

    footerImage.style.bottom = footerHeight + 'px';
});
