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

window.addEventListener("resize", () => {
    screenWidth = window.innerWidth;
})

let bentoButtons = Array.from(document.querySelectorAll(".projectCards"));
const bentoGrid = document.querySelector(".bentoGrid");

bentoButtons.forEach((button) => {
    let index = bentoButtons.indexOf(button);
    const selectedButton = bentoButtons[index];
    let otherButtons = bentoButtons.filter((button) => button !== selectedButton);

    button.addEventListener("click", () => {
        selectedButton.classList.add("scale-up-center");
        selectedButton.classList.remove("flip-in-diag-2-br");
        selectedButton.classList.remove("minimize");

        if (screenWidth >= 1440) {
            bentoGrid.style.gridTemplateRows = "repeat(3, 1fr)";
            selectedButton.style.gridColumn = "2/5";
            selectedButton.style.gridRow = "2/4";
        } else if (screenWidth < 1440) {
            bentoGrid.style.gridTemplateColums = "repeat(4, 1fr)";
            bentoGrid.style.gridAutoRows = "1fr";
            selectedButton.style.gridColumn = "2/4";
            selectedButton.style.gridRow = "2/4";
        }


        otherButtons.forEach((button) => {
            button.classList.remove("scale-up-center");
            button.classList.add("flip-in-diag-2-br");
            button.classList.add("minimize");
            button.style.gridColumn = "1 span";
            button.style.gridRow = "1 span";
        });
    });
});

document.addEventListener("click", (event) => {
    const isClickInsideGrid = bentoGrid.contains(event.target);

    if (!isClickInsideGrid) {

        bentoButtons.forEach((button) => {
            button.classList.remove("flip-in-diag-2-br");
            button.style.gridColumn = "";
            button.style.gridRow = "";
            button.classList.remove("minimize");
            button.classList.add("scale-up-center");
        });

    }
});