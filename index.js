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
const slideshow2 = document.querySelector(".slideshow-2")

setInterval(() => {
    if(slideshow){
        const firstSlideshowImage = slideshow.firstElementChild;
        console.log(firstSlideshowImage)
        slideshow.removeChild(firstSlideshowImage)
        slideshow.appendChild(firstSlideshowImage)
    }
}, 6000)

setInterval(() => {
    if(slideshow) {
        const firstSlideshowImage2 = slideshow2.firstElementChild;
        slideshow2.removeChild(firstSlideshowImage2)
        slideshow2.appendChild(firstSlideshowImage2)
    }
}, 8000)

if(hamburger) {
    hamburger.addEventListener("click", () => {
        bar1.classList.toggle("animateBar1");
        bar2.classList.toggle("animateBar2");
        bar3.classList.toggle("animateBar3");
        mobileDrawer.classList.toggle("openDrawer")

    });
}


const blackPearl = getComputedStyle(root).getPropertyValue("--fixed-black-pearl")
const white = getComputedStyle(root).getPropertyValue("--fixed-white")
const topaz = getComputedStyle(root).getPropertyValue("--fixed-topaz")
const whiteIce = getComputedStyle(root).getPropertyValue("--fixed-white-ice")
const deepSea = getComputedStyle(root).getPropertyValue("--fixed-deep-sea")
const dune = getComputedStyle(root).getPropertyValue("--fixed-dune")
const onyx = getComputedStyle(root).getPropertyValue("--fixed-onyx")
const geyser = getComputedStyle(root).getPropertyValue("--fixed-geyser")

const  blackPearlFilter = getComputedStyle(document.querySelector(":root")).getPropertyValue("--fixed-black-pearl-filter");
const whiteFilter = getComputedStyle(document.querySelector(":root")).getPropertyValue("--fixed-white-filter");

darkModeSliderBar.addEventListener("click", function () {
    if (!darkModeSliderCircle.classList.contains("activateDarkMode")) {
        root.style.setProperty("--theme-body-color", dune)
        root.style.setProperty("--theme-font-color", white);
        root.style.setProperty("--theme-overlay-color", onyx)
        root.style.setProperty("--theme-nav-color", onyx)
        root.style.setProperty("--theme-accent-color", geyser)
        root.style.setProperty("--theme-main-logo-background-opacity", "30%")
        for (let i = 0; i < document.getElementsByClassName("icon-to-filter").length; i++) {
            document.getElementsByClassName("icon-to-filter").item(i).style.filter = whiteFilter
        }


    } else {
        root.style.setProperty("--theme-body-color", white)
        root.style.setProperty("--theme-font-color", blackPearl);
        root.style.setProperty("--theme-overlay-color", white)
        root.style.setProperty("--theme-nav-color", topaz)
        root.style.setProperty("--theme-accent-color", topaz)
        root.style.setProperty("--theme-main-logo-background-opacity", "70%")
        for (let i = 0; i < document.getElementsByClassName("icon-to-filter").length; i++) {
            document.getElementsByClassName("icon-to-filter").item(i).style.filter = blackPearlFilter
        }

    }
    darkModeSliderCircle.classList.toggle("activateDarkMode");
    darkModeSliderBar.classList.toggle("changeSliderColor");
});