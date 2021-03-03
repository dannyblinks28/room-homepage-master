
/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu-show'),
    toggleMenu = document.getElementById('mobile-cta'),
    closeMenu = document.getElementById('mobile-exit')

/*SHOW*/
toggleMenu.addEventListener('click', () => navMenu.classList.toggle('show'));

/*HIDDEN*/
closeMenu.addEventListener('click', () => navMenu.classList.remove('show'));


/*===== CHANGE BACKGROUND AND TEXT =====*/

const services = [
    {
        nav: "../images/desktop-image-hero-1.jpg",
        asideHeader: "Discover innovative ways to decorate",
        asideParagraph: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life.Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },

    {
        nav: "../images/desktop-image-hero-3.jpg",
        asideHeader: "We are available all across the globe",
        asideParagraph: "With stores all over the world, its easy for you to find furniture for your home or place of business. Locally, were in most major cities throughout the country.Find the branch nearest you using our store locator.Any questions? Don't hesitate to contact us today."

    },

    {
        nav: "../images/desktop-image-hero-2.jpg",
        asideHeader: "Manufactured with the best materials",
        asideParagraph: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."

    }

]

/*===== SELECT ITEMS =====*/
const previousArrow = document.querySelector(".nav_left");
const nextArrow = document.querySelector(".nav_right");


const images = document.getElementsByTagName("nav");
const asideHeaderArea = document.getElementsByClassName("aside_header");
const asideParagraphArea = document.getElementsByClassName("aside_paragraph");

/*===== SET STARTING ITEM =====*/
let currentIndex = 0;

nextArrow.addEventListener("click", () => {
    alert("Please i want you to work thanks")
})

previousArrow.addEventListener("click", () => {
    alert("Please i want you to work thanks")
})

