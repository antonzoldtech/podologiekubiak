const hamburger = document.querySelector(".hamburger");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const mobileDrawer = document.querySelector(".mobileNav")
const darkModeSliderBar = document.querySelector(".toggle-bar")
const darkModeSliderCircle = document.querySelector(".toggle-circle")
const root = document.querySelector(":root");

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const slideshow = document.querySelector(".slideshow");

setInterval(() => {
    const firstSlideshowImage = slideshow.firstElementChild;
    slideshow.removeChild(firstSlideshowImage)
    slideshow.appendChild(firstSlideshowImage)
}, 6000)

hamburger.addEventListener("click", () => {
    bar1.classList.toggle("animateBar1");
    bar2.classList.toggle("animateBar2");
    bar3.classList.toggle("animateBar3");
    mobileDrawer.classList.toggle("openDrawer")
});

const blackPearl = getComputedStyle(root).getPropertyValue("--fixed-black-pearl")
const white = getComputedStyle(root).getPropertyValue("--fixed-white")

const whiteIce = getComputedStyle(root).getPropertyValue("--fixed-white-ice")
const deepSea = getComputedStyle(root).getPropertyValue("--fixed-deep-sea")
const slate = getComputedStyle(root).getPropertyValue("--fixed-slate")

const  blackPearlFilter = getComputedStyle(document.querySelector(":root")).getPropertyValue("--fixed-black-pearl-filter");
const whiteFilter = getComputedStyle(document.querySelector(":root")).getPropertyValue("--fixed-white-filter");

darkModeSliderBar.addEventListener("click", function () {
    if (!darkModeSliderCircle.classList.contains("activateDarkMode")) {
        root.style.setProperty("--theme-body-color", slate)
        root.style.setProperty("--theme-font-color", white);
        root.style.setProperty("--theme-overlay-color", blackPearl)
        root.style.setProperty("--theme-nav-color", blackPearl)
        for (let i = 0; i < document.getElementsByClassName("icon-to-filter").length; i++) {
            document.getElementsByClassName("icon-to-filter").item(i).style.filter = whiteFilter
        }
        root.style.setProperty("theme-color-filter", whiteFilter)

    } else {
        root.style.setProperty("--theme-body-color", white)
        root.style.setProperty("--theme-font-color", blackPearl);
        root.style.setProperty("--theme-overlay-color", white)
        root.style.setProperty("--theme-nav-color", deepSea)
        for (let i = 0; i < document.getElementsByClassName("icon-to-filter").length; i++) {
            document.getElementsByClassName("icon-to-filter").item(i).style.filter = blackPearlFilter
        }

    }
    darkModeSliderCircle.classList.toggle("activateDarkMode");
    darkModeSliderBar.classList.toggle("changeSliderColor");
});