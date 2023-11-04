const colorMode = document.getElementById("colorMode");
const menu = document.getElementsByTagName("menu")[0];

colorMode.addEventListener('click', () => {

    document.documentElement.classList.toggle('darkMode');

})

let isPhoneCSSLoaded = false;
let isDesktopCSSLoaded = false;

window.addEventListener('resize', () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768 && !isPhoneCSSLoaded) {
        // Cargar archivo CSS para dispositivos móviles
        const linkElement = document.createElement("link");
        linkElement.setAttribute("rel", "stylesheet");
        linkElement.setAttribute("type", "text/css");
        linkElement.setAttribute("href", "phone.css");
        document.head.appendChild(linkElement);

        isPhoneCSSLoaded = true;
        isDesktopCSSLoaded = false;
    } else if (screenWidth > 768 && !isDesktopCSSLoaded) {
        // Cargar archivo CSS para dispositivos de escritorio
        const linkElement = document.createElement("link");
        linkElement.setAttribute("rel", "stylesheet");
        linkElement.setAttribute("type", "text/css");
        linkElement.setAttribute("href", "desktop.css");
        document.head.appendChild(linkElement);

        isDesktopCSSLoaded = true;
        isPhoneCSSLoaded = false;
    }
});

const button = document.getElementById("arrowUp");

button.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
});