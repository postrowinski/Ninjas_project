const handleAppsLinksClick = document.querySelectorAll('.slide-button-buy a');

//Prevent to moving website after clicking to top of the window
handleAppsLinksClick.forEach((element) => {
    element.addEventListener('click', event => event.preventDefault());
});