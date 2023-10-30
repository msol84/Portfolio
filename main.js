let screenWidth = window.innerWidth;
const selection = document.getElementById("firstLook")
const bannerTitleH1 = document.getElementsByTagName("h1")[0];
const bannerTitleH2 = document.getElementsByTagName("h2")[0];
const slider = document.getElementById("slider");
const colorMode = document.getElementById("colorMode");
const buttonright = document.getElementById("arrowRight");
const buttonleft = document.getElementById("arrowLeft");
const menu = document.getElementsByTagName("menu")[0];
const menuItems = document.getElementsByClassName("menuItems");
let javaFill = document.getElementById("java");

window.addEventListener('resize', () => {
    screenWidth = window.innerWidth;
    if (screenWidth >= 700) {

        menu.style.flexDirection = "row";
        menu.style.gap = "1rem";

        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].classList.remove("phone");
            menuItems[i].classList.add("desktop");
        }
        if (screenWidth <= 1325) {
            menu.style.width = ((-0.0736 * screenWidth + 152.93) + "vw");
        } else if (screenWidth >= 1325) {
            menu.style.width = (50 + "vw");
        }

        if (screenWidth >= 1440) {
            selection.style.flexDirection = "row";
            bannerTitleH1.style.textAlign = "left";
            bannerTitleH2.style.textAlign = "left";
        } else {
            selection.style.flexDirection = "column-reverse";
            bannerTitleH1.style.textAlign = "center";
            bannerTitleH2.style.textAlign = "center";
        }
        if (screenWidth <= 1024) {
            slider.style.flexDirection = "column";
        } else {
            slider.style.flexDirection = "row";
        }
    } else {
        menu.style.width = (100 + "vw");
        menu.style.flexDirection = "column";
        menu.style.gap = "0";
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].classList.remove("desktop");
            menuItems[i].classList.add("phone");
        }
    }
})

colorMode.addEventListener('click', () => {

    document.documentElement.classList.toggle('darkMode');
    if (document.documentElement.classList.contains('darkMode')) {
        javaFill.style.fill = "white";
    } else {
        javaFill.style.fill = "black";
    }

})


buttonleft.addEventListener('click', () => {

})

buttonright.addEventListener('click', () => {

})

