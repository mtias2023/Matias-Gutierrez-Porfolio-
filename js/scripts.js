const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    menuIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
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
            saludo: "Hola, soy Matias Gutierrez",
            descripcion: "Desarrollador Full Stack apasionado por crear experiencias digitales únicas.",
            boton_contacto: "Contáctame",
            boton_descargar_cv: "Descargar CV",
            sobre_mi_titulo: "Sobre mí",
            nombre: "Matias Gutierrez",
            descripcion_about: "Soy un desarrollador Full Stack apasionado por la creación de soluciones digitales modernas y atractivas. Cuento con experiencia tanto en frontend como en backend, utilizando tecnologías como HTML, CSS, JavaScript, diversos frameworks, y trabajando con bases de datos. Mi objetivo es ayudar a empresas y emprendedores a llevar sus ideas al mundo digital mediante sitios web intuitivos, funcionales y visualmente impactantes. Me destaco por mi capacidad de trabajo en equipo, aportando ideas y aprendiendo continuamente para seguir perfeccionando mis habilidades. Siempre busco nuevos desafíos que me permitan crecer profesionalmente.",
            mis_habilidades: "Mis Habilidades",
            mi_formacion: "Formación Académica",
            academia: "Tecnicatura en Desarrollo y Programación Web",
            da_vinci: "Escuela Da Vinci",
            academia1: "Curso de introducción al desarrollo web: HTML y CSS",
            academia2: "Curso de Introdución a la Programación web",
            proyecto: "Proyectos",
            fabo_info: "Es una aplicación web diseñada para facilitar la conexión entre aficionados al deporte. Permite a los usuarios compartir experiencias, organizar y participar en partidos de Fútbol, Básquet, tenis y comunicarse a través de chats públicos y privados. El objetivo principal es fomentar la interacción y la organización deportiva en una comunidad dinámica y accesible.",
            fabo2: "Es una Landing Page de FABO que fue diseñada para promocionar la Progressive Web App (PWA) y fomentar su descarga. Desarrollada con un diseño moderno y responsivo, garantiza una experiencia de usuario fluida en cualquier dispositivo. Implementa estrategias de conversión con llamadas a la acción claras y optimización para SEO, asegurando mayor alcance y visibilidad.",
            buscador: "Buscador de peliculas",
            buscador_info: "CineMax es tu buscador de películas ideal. Con esta aplicación, puedes buscar películas por título, género o explorar las más populares. Además, tienes la opción de guardar tus películas favoritas para acceder a ellas fácilmente en cualquier momento o eliminarlas si cambian tus preferencias. Cada película incluye detalles como sinopsis, fecha de estreno y póster oficial.",
            delicias: "Delicias Express",
            delicias_info: "Es un Ecommerce sobre una marca de comida rápida creada por Matias Gutierrez y para ofrecer productos deliciosos, frescos y accesibles a todos. Se especializa en empanadas, pizzas, panchos, chipá, pastelitos y medialunas, combinando la calidad artesanal con la rapidez que necesitas. El objetivo es brindar una experiencia sencilla y cómoda. (En desarrollo)",
            contactos: "Contacto",
            nombre1: "Nombre",
            email: "Correo",
            mensaje: "Mensaje",
            enviar: "Enviar",
            footer: "2025 Portafolio de Matias Gutierrez. Todos los derechos reservados."
        },
        en: {
            inicio: "Home",
            sobre_mi: "About Me",
            habilidades: "Skills",
            formacion: "Education",
            proyectos: "Projects",
            contacto: "Contact",
            saludo: "Hi, I'm Matias Gutierrez",
            descripcion: "Full Stack Developer passionate about creating unique digital experiences.",
            boton_contacto: "Contact Me",
            boton_descargar_cv: "Download CV",
            sobre_mi_titulo: "About Me",
            nombre: "Matias Gutierrez",
            descripcion_about: "I am a full-stack developer passionate about creating modern and engaging digital solutions. I have experience in both front- and back-end development, using technologies such as HTML, CSS, JavaScript, various frameworks, and working with databases. My goal is to help companies and entrepreneurs bring their ideas to the digital world through intuitive, functional, and visually stunning websites. I excel at teamwork, contributing ideas, and continually learning to further hone my skills. I'm always looking for new challenges that allow me to grow professionally.",
            mis_habilidades: "My Skills",
            mi_formacion: "Academic Training",
            academia: "Technician in Web Development and Programming",
            da_vinci: "Da Vinci School",
            academia1: "Introductory Course to Web Development: HTML and CSS",
            academia2: "Introduction to Web Programming Course",
            proyecto: "Projects",
            fabo_info: "It's a web application designed to facilitate connection among sports fans. It allows users to share experiences, organize and participate in soccer, basketball, and tennis games, and communicate through public and private chats. The main objective is to foster sports interaction and organization in a dynamic and accessible community.",
            fabo2: "This is a FABO landing page designed to promote the Progressive Web App (PWA) and encourage downloads. Developed with a modern, responsive design, it guarantees a seamless user experience on any device. It implements conversion strategies with clear calls to action and SEO optimization, ensuring greater reach and visibility.",
            buscador: "Movie search engine",
            buscador_info: "CineMax is your ideal movie finder. With this app, you can search for movies by title, genre, or browse the most popular ones. You also have the option to save your favorite movies for easy access at any time or delete them if your preferences change. Each movie includes details such as a synopsis, release date, and official poster.",
            delicias: "Express Delights",
            delicias_info: "It's an e-commerce platform about a fast-food brand created by Matias Gutierrez to offer delicious, fresh, and affordable products to everyone. It specializes in empanadas, pizzas, hot dogs, chipá, pastries, and croissants, combining artisanal quality with the speed you need. The goal is to provide a simple and convenient experience. (In development)",
            contactos: "Contact",
            nombre1: "Name",
            email: "Mail",
            mensaje: "message",
            enviar: "Send",
            footer: "2025 Matias Gutierrez Portfolio. All rights reserved."
        }
    };

    // Actualizar los textos de la página
    document.getElementById('inicio').textContent = translations[language].inicio;
    document.getElementById('sobre_mi').textContent = translations[language].sobre_mi;
    document.getElementById('habilidades').textContent = translations[language].habilidades;
    document.getElementById('formacion').textContent = translations[language].formacion;
    document.getElementById('proyectos').textContent = translations[language].proyectos;
    document.getElementById('contacto').textContent = translations[language].contacto;
    document.getElementById('saludo').textContent = translations[language].saludo;
    document.getElementById('descripcion').textContent = translations[language].descripcion;
    document.getElementById('boton_contacto').textContent = translations[language].boton_contacto;
    document.getElementById('boton_descargar_cv').textContent = translations[language].boton_descargar_cv;
    document.getElementById('sobre_mi_titulo').textContent = translations[language].sobre_mi_titulo;
    document.getElementById('nombre').textContent = translations[language].nombre;
    document.getElementById('descripcion_about').textContent = translations[language].descripcion_about;
    document.getElementById('mis_habilidades').textContent = translations[language].mis_habilidades;
    document.getElementById('mi_formacion').textContent = translations[language].mi_formacion;
    document.getElementById('academia').textContent = translations[language].academia;
    document.getElementById('da_vinci').textContent = translations[language].da_vinci;
    document.getElementById('academia1').textContent = translations[language].academia1;
    document.getElementById('academia2').textContent = translations[language].academia2;
    document.getElementById('proyecto').textContent = translations[language].proyecto;
    document.getElementById('fabo_info').textContent = translations[language].fabo_info;
    document.getElementById('fabo2').textContent = translations[language].fabo2;
    document.getElementById('buscador').textContent = translations[language].buscador;
    document.getElementById('buscador_info').textContent = translations[language].buscador_info;
    document.getElementById('delicias').textContent = translations[language].delicias;
    document.getElementById('delicias_info').textContent = translations[language].delicias_info;
    document.getElementById('contactos').textContent = translations[language].contactos;
    document.getElementById('nombre1').textContent = translations[language].nombre1;
    document.getElementById('email').textContent = translations[language].email;
    document.getElementById('mensaje').textContent = translations[language].mensaje;
    document.getElementById('enviar').textContent = translations[language].enviar;
    document.getElementById('footer').textContent = translations[language].footer;
}

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el comportamiento predeterminado del formulario

    emailjs.init("-fPgLiwlyG7cR6jh3"); // Reemplaza con tu User ID de EmailJS

    // Recoge los valores del formulario
    const serviceID = 'service_ucrxcib'; // Reemplaza con tu Service ID
    const templateID = 'template_kzja2kh'; // Reemplaza con tu Template ID
    const params = {
        name: document.getElementById('name').value, // Debe coincidir con {{name}} en la plantilla
        email: document.getElementById('email').value, // Debe coincidir con {{email}} en la plantilla
        message: document.getElementById('message').value, // Debe coincidir con {{message}} en la plantilla
    };

    // Envía el correo
    emailjs.send(serviceID, templateID, params)
        .then(response => {
            // Muestra el mensaje de éxito
            const successMessage = document.getElementById('success-message');
            successMessage.classList.remove('hidden');
            console.log('SUCCESS!', response.status, response.text);
        })
        .catch(error => {
            alert('Hubo un error al enviar el mensaje. Inténtalo nuevamente.');
            console.error('FAILED...', error);
        });
});

