let screenWidth = window.innerWidth;
function cargarCSS() {

    if (screenWidth < 768) {
        // Cargar archivo CSS para dispositivos móviles
        const linkElement = document.createElement("link");
        linkElement.setAttribute("rel", "stylesheet");
        linkElement.setAttribute("type", "text/css");
        linkElement.setAttribute("href", "phone.css");
        document.head.appendChild(linkElement);
    } else {
        // Cargar archivo CSS para dispositivos de escritorio
        const linkElement = document.createElement("link");
        linkElement.setAttribute("rel", "stylesheet");
        linkElement.setAttribute("type", "text/css");
        linkElement.setAttribute("href", "desktop.css");
        document.head.appendChild(linkElement);
    }
}

// Llamar a la función al cargar la página
window.addEventListener("DOMContentLoaded", cargarCSS);

// También puedes llamar a la función en cualquier otro evento o acción que desees