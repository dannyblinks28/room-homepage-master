
document.getElementById("mobile-cta").onclick = function () {
    document.getElementById("nav-menu-show").style.display = "block";
}

document.getElementById("mobile-exit").onclick = function () {
    document.getElementById("nav-menu-show").style.display = "none";

}


var services = [
    {
        'nav': '../images/desktop-image-hero-1.jpg',
        'asideHeader': 'Discover innovative ways to decorate',
        /* 'asideParagraph': 'We provide unmatched quality, comfort, and style for property owners across the country.
        Our experts combine form and function in bringing your vision to life.Create a room in your
        own style with our collection and make your property a reflection of you and what you love.' */
    },

    {
        'nav': '../images/desktop-image-hero-3.jpg',
        'asideHeader': 'We are available all across the globe',
        /* 'asideParagraph': 'With stores all over the world, its easy for you to find furniture for your home or place of business. Locally, were in most major cities throughout the country.Find the branch nearest you using our store locator.Any questions? Don't hesitate to contact us today.' */

    },

    {
        'nav': '../images/desktop-image-hero-2.jpg',
        'asideHeader': 'Manufactured with the best materials',
        /* 'asideParagraph': 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.' */

    }

]

var previousArrow = document.getElementsByClassName("nav_left");
var nextArrow = document.getElementsByClassName("nav_right");

var currentIndex = 0;

