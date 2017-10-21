document.addEventListener('DOMContentLoaded', function() {
    const handleAppsLinksClick = document.querySelectorAll('.slide-button-buy a');
    const footer = document.querySelector('footer');
    const footerImage = document.querySelector('.rugged-paper-upside-down');
    var footerHeight = footer.clientHeight;

    footerImage.style.bottom = footerHeight + 'px';


    window.addEventListener('resize',function () {
        var footerHeight = footer.clientHeight;
        footerImage.style.bottom = footerHeight + 'px';
    });

    //Prevent to moving website after clicking to top of the window
    handleAppsLinksClick.forEach(function (element) {
        element.addEventListener('click', function (event) {
            event.preventDefault()
        });
    });
});
//     footerImage.style.bottom = footerHeight + 'px';
//
//     function appSlider() {
//         var $carouselRow = $('#app-carousel .row');
//         var $sliceWidth = $carouselRow.children().first().clientWidth;
//         var slideTime = 3000;
//
//
//         window.addEventListener('resize', function () {
//             var $sliceWidth = $carouselRow.children().first().clientWidth;
//         });
//
//
//         function changeMargin() {
//
//         }
//
//         function nextSlide() {
//             var $firstSlide = $carouselRow.find('.slide-container').first();
//             var $lastSlide = $carouselRow.find('.slide-container').last();
//
//             $lastSlide.after($firstSlide);
//             changeMargin();
//         }
//     }
// });