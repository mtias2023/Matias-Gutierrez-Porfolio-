// Mostrar/Ocultar menú hamburguesa
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Cambiar sesión activa
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Eliminar clase 'active' de todos los enlaces
        navLinks.forEach(nav => nav.classList.remove('active'));
        // Agregar clase 'active' al enlace seleccionado
        link.classList.add('active');
    });
});

// Función para cambiar el idioma de la página
function changeLanguage(language) {
    // Establecer el idioma en el atributo 'lang' del HTML
    document.documentElement.lang = language;

    // Traducciones para los textos en los diferentes idiomas
    const translations = {
        es: {
            inicio: "Inicio",
            sobre_mi: "Sobre mí",
            habilidades: "Habilidades",
            formacion: "Formación",
            proyectos: "Proyectos",
            contacto: "Contacto",
            saludo: "Hola, soy Matias",
            descripcion: "Desarrollador apasionado por crear experiencias digitales únicas.",
        },
        en: {
            inicio: "Home",
            sobre_mi: "About Me",
            habilidades: "Skills",
            formacion: "Education",
            proyectos: "Projects",
            contacto: "Contact",
            saludo: "Hi, I'm Matias",
            descripcion: "Developer passionate about creating unique digital experiences.",
        }
    };

    // Actualizar los textos de la página
    document.getElementById('inicio').textContent = translations[language].inicio;
    document.getElementById('sobre_mi').textContent = translations[language].sobre_mi;
    document.getElementById('habilidades').textContent = translations[language].habilidades;
    document.getElementById('formacion').textContent = translations[language].formacion;
    document.getElementById('proyectos').textContent = translations[language].proyectos;
    document.getElementById('contacto').textContent = translations[language].contacto;

    // Cambiar otros elementos de texto según el idioma (si están definidos en el HTML)
    const saludoElem = document.getElementById('saludo');
    const descripcionElem = document.getElementById('descripcion');

    if (saludoElem) saludoElem.textContent = translations[language].saludo;
    if (descripcionElem) descripcionElem.textContent = translations[language].descripcion;
}
