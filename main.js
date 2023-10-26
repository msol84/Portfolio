let screenWidth = window.innerWidth;
const selection = document.getElementById("firstLook")
const bannerTitleH1 = document.getElementsByTagName("h1")[0];
const bannerTitleH2 = document.getElementsByTagName("h2")[0];
const slider = document.getElementById("slider");
const colorMode = document.getElementById("colorMode");

window.addEventListener('resize', () => {
    screenWidth = window.innerWidth;
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
})

colorMode.addEventListener('click', () => {

    document.documentElement.classList.toggle('darkMode');

})

