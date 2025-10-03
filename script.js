// Control de reproducción de videos basado en scroll - OPTIMIZADO PARA TODOS LOS VIDEOS
document.addEventListener('DOMContentLoaded', function() {
    const videoDemo = document.querySelector('.video-demo');
    const backgroundVideo = document.querySelector('.background-video');
    const videoSecundario = document.querySelector('[data-lazy-video]');
    const containerSecundario = document.querySelector('.container-secundario');
    const containerPrincipal = document.querySelector('.container-principal');
    const containerCuartiario = document.querySelector('.container-cuartiario');

    // Configuración común del observer para optimización
    const observerOptions = {
        root: null, // viewport
        rootMargin: '-10% 0px -10% 0px', // Activar cuando el 80% de la sección esté visible
        threshold: 0.25 // Activar cuando al menos 25% esté visible
    };

    // Función genérica para controlar videos con optimización
    function createVideoObserver(video, container, videoName) {
        if (!video || !container) {
            console.log(`${videoName}: Video o contenedor no encontrado`);
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    video.play().catch(error => {
                        console.log(`Error al reproducir ${videoName}:`, error);
                    });
                    console.log(`${videoName} iniciado`);
                } else {
                    video.pause();
                    console.log(`${videoName} pausado por optimización`);
                }
            });
        }, observerOptions);

        observer.observe(container);

        // Eventos del video
        video.addEventListener('loadeddata', function() {
            console.log(`${videoName} cargado y listo`);
        });

        video.addEventListener('error', function(e) {
            console.error(`Error en ${videoName}:`, e);
        });

        console.log(`Observer configurado para ${videoName}`);
        return observer;
    }

    // Aplicar optimización a todos los videos
    
    // 1. Video de fondo principal (sin autoplay inicial)
    if (backgroundVideo) {
        // Remover autoplay para controlar completamente la reproducción
        backgroundVideo.removeAttribute('autoplay');
        createVideoObserver(backgroundVideo, containerPrincipal, 'Video de fondo principal');
    }

    // 2. Video demostrativo - OPTIMIZADO para reproducir solo cuando el contenedor sea visible
    const videoDemoElement = document.querySelector('.video-demo');
    if (videoDemoElement && typeof videoDemoElement.play === 'function') {
        // Remover autoplay para controlar completamente la reproducción
        videoDemoElement.removeAttribute('autoplay');
        
        // Observer para el contenedor secundario (donde está el video)
        const demoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // El contenedor es visible, reproducir video
                    videoDemoElement.play().catch(error => {
                        console.log('Error al reproducir video demostrativo:', error);
                    });
                    console.log('Video demostrativo iniciado - contenedor visible');
                } else {
                    // El contenedor no es visible, pausar video
                    videoDemoElement.pause();
                    console.log('Video demostrativo pausado - contenedor no visible');
                }
            });
        }, {
            root: null,
            rootMargin: '20px 0px 20px 0px', // Margen pequeño para detectar cuando entre/salga
            threshold: 0.3 // Se activa cuando el 30% del contenedor es visible
        });

        // Observar el contenedor secundario completo
        if (containerSecundario) {
            demoObserver.observe(containerSecundario);
            console.log('Observer configurado para Video demostrativo - optimización de visibilidad');
        } else {
            console.error('Contenedor secundario no encontrado para observar');
        }
        
        // Eventos del video demostrativo
        videoDemoElement.addEventListener('loadeddata', function() {
            console.log('Video demostrativo cargado y listo');
        });

        videoDemoElement.addEventListener('error', function(e) {
            console.error('Error en video demostrativo:', e);
        });

        // Remover la prueba temporal ya que funciona
    } else {
        console.error('Video demostrativo no encontrado o no es un elemento de video válido');
    }

    // 3. Video secundario del cuarto contenedor
    if (videoSecundario) {
        createVideoObserver(videoSecundario, containerCuartiario, 'Video secundario (equipo)');
    }

    // Logging inicial
    console.log('Sistema de optimización de videos iniciado');
    console.log('Todos los videos se reproducirán solo cuando sean visibles');
});

// Función para el menú hamburguesa
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger-menu');
    
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Cerrar menú al hacer clic en un enlace (para mejor UX en móviles)
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger-menu');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Cerrar menú al hacer clic fuera de él
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});
