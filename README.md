# InnovaDevs 🚀

![InnovaDevs Banner](./fondos/programing.png)

## 📝 Descripción

InnovaDevs es una página web corporativa moderna que presenta un equipo de desarrollo especializado en crear soluciones tecnológicas innovadoras. El proyecto se enfoca en el desarrollo de software y sistemas de inteligencia artificial para el sector educativo.

### 🎯 Objetivo
Facilitar la adopción de nuevas tecnologías en la vida cotidiana mediante soluciones de software personalizadas e inteligencia artificial aplicada al aprendizaje.

## ✨ Características Principales

### 🎬 Videos Optimizados
- **Reproducción inteligente**: Los videos se reproducen automáticamente solo cuando están visibles en el viewport
- **Optimización de recursos**: Pausado automático cuando no están visibles para ahorrar CPU y batería
- **Intersection Observer**: Tecnología moderna para detección de visibilidad eficiente

### 📱 Diseño Responsivo
- **Mobile-first**: Diseño adaptable a todos los dispositivos
- **Flexbox Layout**: Organización moderna y flexible de elementos
- **Media Queries**: Optimización específica para diferentes tamaños de pantalla

### 🎨 Interfaz Moderna
- **Gradientes personalizados**: Esquema de colores naranja (#E25822, #FF7700, #D38638, #F0B979)
- **Efectos visuales**: Hover effects, transiciones suaves y backdrop filters
- **Tipografía**: Google Fonts (Poppins) para una apariencia profesional

### ⚡ Rendimiento Optimizado
- **Lazy Loading**: Carga diferida de videos para mejor rendimiento
- **Preload metadata**: Optimización de carga de contenido multimedia
- **CSS optimizado**: Estilos eficientes y organizados

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y moderna
- **CSS3**: Estilos avanzados con Flexbox, Grid, y efectos visuales
- **JavaScript ES6+**: Funcionalidad moderna con Intersection Observer API
- **Google Fonts**: Tipografía profesional (Poppins)

## 📁 Estructura del Proyecto

```
Proyecto ID/
├── 📄 index.html              # Página principal
├── 🎨 styles.css              # Estilos CSS
├── ⚡ script.js               # JavaScript para optimización de videos
├── 📖 README.md               # Documentación del proyecto
├── 📁 fondos/                 # Videos y imágenes de fondo
│   ├── Fondo3.mp4
│   ├── fondo5.mp4
│   ├── programing.png
│   └── monitor-933392_1920.jpg
├── 📁 Equipo/                 # Fotos del equipo
│   ├── Yo CV.jpg
│   └── Fernando.jpg
└── 📁 Videos Demostrativos/   # Videos demostrativos
    └── decoracion.mp4
```

## 🚀 Instalación y Uso

### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, recomendado)

### Instalación

1. **Clona o descarga el proyecto**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd "Proyecto ID"
   ```

2. **Opción 1: Abrir directamente**
   - Abre `index.html` directamente en tu navegador

3. **Opción 2: Servidor local (Recomendado)**
   ```bash
   # Con Python
   python -m http.server 8000
   
   # Con Node.js (live-server)
   npx live-server
   
   # Con PHP
   php -S localhost:8000
   ```

4. **Accede a la aplicación**
   - Directo: `file:///ruta/al/proyecto/index.html`
   - Servidor local: `http://localhost:8000`

## 📋 Secciones de la Página

### 🏠 Sección Principal
- **Hero Section**: Video de fondo con presentación principal
- **Call to Action**: Botones interactivos para navegación

### ℹ️ ¿Qué es InnovaDevs?
- **Descripción del proyecto**: Información sobre objetivos y misión
- **Video demostrativo**: Contenido multimedia explicativo

### 🎯 ¿Qué Ofrecemos?
- **Innovación**: IA para el sistema educativo
- **Eficiencia**: Aprendizaje personalizado
- **Adaptabilidad**: Modelos especializados por materia
- **Accesibilidad**: Disponible en cualquier dispositivo

### 👥 Conoce Nuestro Equipo
- **Kevin Pineda**: Developer FullStack
  - Tecnologías: Java, Node.js, Python, MySQL
  - [GitHub](https://github.com/KevinPineda) | [Portafolio](https://portafolio-kevinpineda.vercel.app/)

- **Fernando Guevara**: Developer Backend
  - Tecnologías: C#, Entity Framework, SQL Server, PostgreSQL
  - [GitHub](https://github.com/fernandoxdddd)

## ⚙️ Funcionalidades JavaScript

### 🎥 Optimización de Videos
```javascript
// Ejemplo de configuración del Intersection Observer
const observerOptions = {
    root: null,
    rootMargin: '20px 0px 20px 0px',
    threshold: 0.3
};
```

### 📱 Características de Rendimiento
- **Detección de visibilidad**: Videos se reproducen solo cuando están visibles
- **Gestión de recursos**: Pausado automático para optimizar rendimiento
- **Logging**: Sistema de mensajes de consola para debugging

## 🎨 Personalización

### Colores del Tema
```css
:root {
    --primary-orange: #E25822;
    --secondary-orange: #FF7700;
    --accent-orange: #D38638;
    --light-orange: #F0B979;
    --dark-bg: #090909;
    --text-light: #fff;
}
```

### Responsive Breakpoints
- **Móviles**: < 768px
- **Tablets**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Desarrollo y Contribución

### Para Desarrolladores

1. **Estructura del CSS**
   - Estilos organizados por secciones
   - Variables CSS para fácil mantenimiento
   - Media queries al final de cada sección

2. **JavaScript Modular**
   - Funciones reutilizables
   - Event listeners organizados
   - Error handling implementado

3. **HTML Semántico**
   - Etiquetas semánticas apropiadas
   - Accesibilidad considerada
   - SEO-friendly

## 📊 Rendimiento

### Métricas de Optimización
- ✅ Lazy loading de videos
- ✅ Preload optimizado
- ✅ CSS minificable
- ✅ JavaScript modular
- ✅ Responsive design

### Browser Support
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 📞 Contacto

- **Proyecto**: InnovaDevs
- **Desarrolladores**: Kevin Pineda
- **Enfoque**: Desarrollo FullStack

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

---

⭐ **¡Dale una estrella a este proyecto si te ha sido útil!**

---

*Desarrollado con ❤️ por el equipo de InnovaDevs*