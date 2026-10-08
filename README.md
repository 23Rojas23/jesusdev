# DevStudio / Portafolio Landing Page 🚀

Landing page profesional y moderna desarrollada para promocionar servicios de programación web, desarrollo de software y aplicaciones a medida.

Construida con el stack tecnológico de alto rendimiento: **React 19 + Vite 8 + Tailwind CSS v4 + TypeScript + Lucide Icons**.

---

## 🌟 Características Principales

1. **Hero Section de Alto Impacto**:
   - Titular persuasivo enfocado en conversión.
   - Simulador de auditoría **Google Lighthouse 100/100** (Performance, Accesibilidad, Prácticas, SEO).
   - Card interactivo con vista previa de código moderno.
   - Botones de llamado a la acción (CTA) y enlace directo a WhatsApp.

2. **Sección de Servicios**:
   - 6 tarjetas de servicios (Landing Pages, Sitios Corporativos, Web Apps/SaaS, E-commerce, Optimización SEO y Mantenimiento).
   - Checklist detallado de lo que incluye cada servicio y tecnologías asociadas.

3. **Portafolio y Casos de Éxito**:
   - Filtros por categoría (*Todos*, *Landing Pages*, *Web Apps*, *E-Commerce*, *Corporativas*).
   - Tarjetas con métricas reales logradas (+240% conversión, <0.8s carga, etc.).
   - Modal interactivo con detalles profundos del caso de estudio, logros y enlaces a Demo / Código fuente.

4. **Stack Tecnológico & Ventajas de Negocio**:
   - Listado categorizado (Frontend, Backend, Bases de datos, Herramientas).
   - Sección explicativa que le muestra al cliente por qué este stack beneficia las ventas y velocidad de su negocio.

5. **Metodología de Trabajo (Paso a Paso)**:
   - 5 etapas claras y transparentes (Descubrimiento, UI/UX, Desarrollo, Pruebas y Lanzamiento) con tiempos estimados por fase.

6. **Calculadora Interactiva de Presupuesto (Cotizador en Vivo)**:
   - Permite al cliente seleccionar tipo de proyecto, complementos opcionales (multi-idioma, blog, pasarela de pago, SEO avanzado, usuarios) y entrega Express.
   - Muestra el precio estimado en tiempo real y días hábiles.
   - Botón directo para transferir la cotización calculada directamente al formulario de contacto.

7. **Planes y Precios Transparentes**:
   - 3 paquetes predefinidos (*Landing Express*, *Web Corporativa Pro*, *A Medida / Web App*) con garantía de satisfacción.

8. **Prueba Social & Testimonios**:
   - Opiniones de clientes con fotos, calificaciones de 5 estrellas y resultados.

9. **Preguntas Frecuentes (FAQ)**:
   - Acordeón interactivo que responde las principales objeciones de los clientes (tiempos, pagos, hosting, móviles, WordPress vs React).

10. **Formulario de Contacto & WhatsApp**:
    - Formulario con selección de servicio, presupuesto y mensaje.
    - Envío directo a WhatsApp con mensaje automático formateado.
    - Botón para copiar correo con 1 clic al portapapeles.
    - Botón flotante de WhatsApp siempre visible.

---

## 🛠️ Tecnologías

- **React 19**
- **Vite 8**
- **Tailwind CSS v4** con `@tailwindcss/vite`
- **TypeScript**
- **Lucide React** (Iconografía moderna)

---

## 🚀 Cómo Ejecutar el Proyecto

### 1. Iniciar el servidor de desarrollo
```bash
npm run dev
```
Abre en tu navegador la URL que te indique la consola (generalmente `http://localhost:5173`).

### 2. Compilar para producción
```bash
npm run build
```
Genera los archivos estáticos ultraligeros y optimizados en la carpeta `/dist`.

### 3. Previsualizar la versión de producción
```bash
npm run preview
```

---

## ✏️ ¿Cómo personalizar tus datos y proyectos?

Toda la información del sitio está centralizada en un solo archivo:

📂 [`src/data/content.ts`](file:///c:/Users/sistemas2/Documents/programacion/MyPage/src/data/content.ts)

Allí puedes editar fácilmente:
- `personalInfo`: Tu nombre, marca, teléfono, número de WhatsApp, correo, redes sociales (GitHub, LinkedIn, etc.) y años de experiencia.
- `servicesData`: Tus servicios, descripciones y características.
- `projectsData`: Tus proyectos reales o ficticios, fotos, métricas y enlaces.
- `pricingPlans`: Los precios y plazos de entrega de tus paquetes.
- `faqData`: Respuestas a las preguntas frecuentes de tus clientes.

---

## 🌐 Cómo desplegar tu web gratis

1. **Vercel (Recomendado)**:
   - Sube este proyecto a tu GitHub.
   - Entra en [vercel.com](https://vercel.com) e importa tu repositorio.
   - Se detectará automáticamente Vite y se publicará en segundos con SSL gratis.
2. **Netlify**:
   - Conecta tu repositorio o arrastra la carpeta `/dist` generada tras ejecutar `npm run build`.
