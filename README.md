# 🌟 HOZLY — Plataforma Digital Oficial

> **Marketing · Publicidad · Tecnología**  
> *Transformamos ideas en estrategias, experiencias digitales y campañas que generan resultados reales.*

[![Next.js](https://img.shields.io/badge/Next.js-16.3.4-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

---

## 📌 1. Resumen Ejecutivo del Proyecto

Este repositorio contiene el código fuente completo del sitio web y plataforma digital corporativa de **HOZLY Agencia Digital**. Diseñada y desarrollada bajo estándares internacionales de alto rendimiento, estética editorial premium (*Dark Mode & Gold Accents*) y arquitectura modular de última generación.

La solución combina la potencia de **Next.js 16 (App Router)** con microinteracciones fluidas en **Framer Motion**, estilos atómicos con **Tailwind CSS v4** y un sistema de gestión de contenidos desacoplado basado en archivos tipados en **TypeScript**, lo que permite una edición rápida, segura y sin fricción técnica.

---

## 💎 2. Identidad de Marca y Concepto

El diseño de la plataforma rinde homenaje al origen y propósito de la firma:

* **Herencia & Familia:** El nombre y concepto nacen del apellido **De la Hoz**, representado por una base de tres hermanos fundadores que aúnan estrategia, tecnología y creatividad publicitaria.
* **Símbolo Oficial:** El isotipo corporativo está codificado en SVG vectorial puro (`HozlyLogo.tsx`):
  * **Tres orbes superiores:** Los tres hermanos fundadores.
  * **Pilares y arco envolvente:** Firmeza tecnológica, solidez y convergencia digital.
  * **Círculo central:** Enfoque en el cliente y resultados medibles.
* **Paleta Cromática Oficial:**
  * `Hozly Black` (`#0A0A0A`): Sofisticación, profundidad y elegancia.
  * `Hozly Dark` (`#1C1C1E`): Tarjetas con efecto vidrio y contrastes modulares.
  * `Hozly Gold` (`#D4AF37` / Gradiente Dorado Metálico): Excelencia, valor premium y liderazgo.
  * `Electric Blue` (`#008CFF`) & `Cyan Tech` (`#34D5C3`): Innovación, velocidad y tecnología de vanguardia.
* **Tipografías:** **Montserrat** (encabezados, autoridad y modernidad) y **Poppins** (cuerpo de lectura, calidez y legibilidad óptima).

---

## 🚀 3. Arquitectura y Secciones de la Plataforma

La experiencia de usuario está orquestada en una narrativa continua y de alto impacto:

| # | Sección | Componente | Descripción |
|---|---|---|---|
| **00** | **Navbar Flotante** | `Navbar.tsx` | Barra de navegación dinámica con desenfoque de fondo (*backdrop-blur*), indicador de estado activo y menú responsive móvil. |
| **01** | **Hero Principal** | `Hero.tsx` | Presentación de marca de alto impacto con arte geométrico animado, llamadas a la acción primarias y métricas clave. |
| **02** | **Brand Statement** | `BrandStatement.tsx` | Declaración de postura editorial y manifiesto de la agencia. |
| **03** | **Servicios de Autor** | `Services.tsx` | Explorador interactivo de los 5 servicios con entregables específicos, tecnologías y acentos de color. |
| **04** | **Métricas de Impacto** | `ImpactMetrics.tsx` | Indicadores de rendimiento cuantitativos (+120 proyectos, 98% satisfacción, etc.). |
| **05** | **Metodología (Proceso)** | `Process.tsx` | Flujo de trabajo en 5 etapas secuenciales (*Descubrimos, Diseñamos, Construimos, Lanzamos, Crecemos*). |
| **06** | **Portafolio Editorial** | `Projects.tsx` | Vitrina asimétrica de casos de estudio con filtrado en tiempo real por disciplina. |
| **07** | **Historia & Logotipo** | `About.tsx` & `LogoStory.tsx` | Narrativa de origen (De la Hoz) e interactividad visual con la anatomía del símbolo oficial. |
| **08** | **Misión & Visión** | `MissionVision.tsx` | Declaraciones oficiales de propósito operativo y aspiración internacional. |
| **09** | **Diferenciales** | `Differentials.tsx` | Matriz de valor (*No somos solo una agencia*): Creatividad, Estrategia, Tecnología, Resultados y Cercanía. |
| **10** | **Call to Action Central** | `MidCTA.tsx` | Bloque de alta conversión visual previo al contacto final. |
| **11** | **Formulario de Contacto** | `Contact.tsx` | Formulario interactivo con selectores de servicio y rango de presupuesto, validaciones y feedback con confeti. |
| **12** | **Footer Corporativo** | `Footer.tsx` | Enlaces rápidos, accesos directos a redes sociales, botón de retorno al inicio y créditos legales. |

---

## 🛠️ 4. Stack Tecnológico

* **Framework Core:** Next.js 16.3.4 (React 19, App Router, Server Components + Client Islands).
* **Lenguaje:** TypeScript 5 (tipado estricto en interfaces de datos y componentes).
* **Estilizado:** Tailwind CSS v4 con variables semánticas personalizadas.
* **Animaciones:** Framer Motion 13 (animaciones de scroll, transiciones de entrada y efectos interactivos).
* **Iconografía:** Lucide React (iconos SVG optimizados).
* **Interactividad Especial:** Canvas Confetti (celebración al completar formulario de contacto) y Cursor personalizado (`CustomCursor.tsx`).
* **Optimización SEO:** Metadatos completos en `layout.tsx`, `robots.ts` y `sitemap.ts`.

---

## 📂 5. Estructura de Carpetas

```text
hozly-agency/
├── public/                     # Recursos estáticos públicos (logos, favicons, iconos)
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css         # Tokens de diseño, gradientes y directivas Tailwind v4
│   │   ├── layout.tsx          # Layout global, fuentes Google, SEO Meta y Viewport
│   │   ├── page.tsx            # Orquestación de la página de inicio (Landing Page)
│   │   ├── robots.ts           # Configuración de rastreo de motores de búsqueda
│   │   └── sitemap.ts          # Generador de mapa de sitio XML dinámico
│   ├── components/
│   │   ├── about/              # Historia corporativa y anatomía del logotipo
│   │   ├── brand/              # Misión, visión y diferenciales competitivos
│   │   ├── contact/            # Formulario de captación de leads y datos de contacto
│   │   ├── cta/                # Banners intermedios de conversión
│   │   ├── hero/               # Portada principal interactiva
│   │   ├── impact/             # KPIs numéricos y métricas de impacto
│   │   ├── intro/              # Declaración de manifiesto
│   │   ├── layout/             # Componentes de estructura global (Navbar, Footer)
│   │   ├── process/            # Metodología de trabajo en 5 etapas
│   │   ├── projects/           # Galería y filtros del portafolio
│   │   ├── services/           # Explorador y tarjetas de servicios
│   │   └── ui/                 # Componentes reutilizables (Botones, Contenedores, Logo)
│   ├── data/                   # ⭐️ ARCHIVOS DE CONTENIDO EDITABLES
│   │   ├── differentials.ts    # Textos de los 5 diferenciales
│   │   ├── process.ts          # Etapas y puntos de la metodología
│   │   ├── projects.ts         # Lista de casos de estudio y proyectos del portafolio
│   │   └── services.ts         # Lista de servicios, entregables y tecnologías
│   └── lib/                    # Funciones utilitarias (clsx, tailwind-merge)
├── package.json                # Dependencias y scripts de ejecución
├── tsconfig.json               # Configuración del compilador TypeScript
└── README.md                   # Documentación oficial de entrega
```

---

## 📝 6. Guía de Administración y Edición de Contenido

Toda la información del sitio se encuentra centralizada en archivos de datos fáciles de editar en la carpeta `src/data/`. No es necesario alterar componentes de interfaz para actualizar la información de la agencia.

### 🔹 1. Actualizar o Agregar Proyectos al Portafolio
Editar el archivo: **`src/data/projects.ts`**
```typescript
{
  id: "mi-nuevo-proyecto",
  title: "NOMBRE DEL PROYECTO",
  category: "Subtítulo de la categoría",
  discipline: "Desarrollo Web", // Opciones: "Branding" | "Desarrollo Web" | "Marketing" | "Publicidad" | "Estrategia"
  year: "2025",
  description: "Descripción breve del impacto y solución entregada.",
  tags: ["Next.js", "E-Commerce", "Branding"],
  aspectRatio: "wide", // "tall" | "wide" | "square"
  accentColor: "#D4AF37",
  featured: true, // Si se destaca con mayor protagonismo visual
}
```

### 🔹 2. Editar Servicios y Entregables
Editar el archivo: **`src/data/services.ts`**
* Cada servicio cuenta con `deliverables` (entregables que se listan con check) y `technologies` (herramientas asociadas).

### 🔹 3. Modificar Etapas de la Metodología
Editar el archivo: **`src/data/process.ts`**
* Permite cambiar títulos, bajadas de línea y los 3 puntos clave de cada una de las 5 fases.

### 🔹 4. Actualizar Canales de Contacto y Redes Sociales
* **Correo directo y tiempos de respuesta:** Editar en `src/components/contact/Contact.tsx` y `src/components/layout/Footer.tsx`.
* **Enlaces a Redes Sociales:** Modificar las etiquetas `<a>` en `src/components/layout/Footer.tsx` (Instagram, LinkedIn, X, YouTube, etc.).
* **Metadatos y Títulos SEO:** Modificar el objeto `metadata` en `src/app/layout.tsx`.

---

## ⚡ 7. Instalación y Ejecución Local

### Prerrequisitos
* **Node.js**: Versión `20.x` o superior recomendada (LTS).
* **Gestor de paquetes**: `npm` (incluido con Node), `pnpm` o `yarn`.
* **Git**: Instalado en el sistema.

### Paso a Paso

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/fainnerramirez/hozly-digital-agency.git
   cd hozly-digital-agency
   ```

2. **Instalar las dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abrir en el navegador: [http://localhost:3000](http://localhost:3000)

4. **Validación de código y linting:**
   ```bash
   npm run lint
   ```

5. **Compilación de producción (Build test):**
   ```bash
   npm run build
   npm run start
   ```

---

## 📬 8. Conexión del Formulario de Contacto

El formulario en `src/components/contact/Contact.tsx` cuenta con validaciones de campos (nombre, correo, empresa, servicio y presupuesto), manejo de estados de carga y pantalla de confirmación exitosa con microanimación y confeti.

Para canalizar los envíos a la casilla `contacto@hozly.agency` o a un CRM (HubSpot, Notion, Slack), se pueden emplear cualquiera de las siguientes opciones recomendadas:

1. **Opción A — Vía API Route nativa en Next.js con Resend / SendGrid:**
   * Crear la ruta `src/app/api/contact/route.ts`.
   * Integrar la librería oficial de [Resend](https://resend.com) o `@sendgrid/mail`.
   * Sustituir la promesa simulada en `handleSubmit` por un llamado `fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })`.
2. **Opción B — Servicio de formulario sin servidor (Formspree / Web3Forms):**
   * Configurar el `action` con el endpoint provisto por el proveedor y enviar el payload directamente.
3. **Opción C — Webhook hacia Make / Zapier / WhatsApp:**
   * Enviar los datos del formulario a un webhook de automatización para recibir alertas directas en WhatsApp o el canal de Slack del equipo de HOZLY.

---

## 🌐 9. Guía de Despliegue en Producción

### Despliegue Recomendado: Vercel (1-Click)
Dado que el proyecto está desarrollado en Next.js, **Vercel** ofrece despliegues automáticos globales, CDN de borde y certificados SSL instantáneos.

1. Iniciar sesión en [Vercel](https://vercel.com).
2. Seleccionar **"Add New Project"** e importar el repositorio de GitHub: `hozly-digital-agency`.
3. Vercel detectará de manera automática el framework **Next.js**.
4. Presionar **"Deploy"**.
5. Para enlazar el dominio propio (ej. `hozly.agency`):
   * Ir a **Project Settings > Domains**.
   * Agregar `hozly.agency` y `www.hozly.agency`.
   * Configurar los registros DNS tipo `A` y `CNAME` que indique la plataforma en el proveedor de dominio.

### Alternativa: Servidor Privado (VPS / Docker / PM2)
```bash
# En el servidor
git clone https://github.com/fainnerramirez/hozly-digital-agency.git
cd hozly-digital-agency
npm install
npm run build

# Iniciar proceso continuo con PM2
pm2 start npm --name "hozly-agency" -- start -- -p 3000
```

---

## 📋 10. Checklist de Entrega al Cliente

- [x] Arquitectura Next.js 16 con App Router y Server Components.
- [x] Diseño visual premium Dark Mode adaptado a identidad HOZLY.
- [x] Totalmente responsive (adaptable a smartphones, tablets y pantallas ultrawide).
- [x] Logotipo oficial codificado en SVG con gradiente dorado dinámico.
- [x] 12 secciones estructuradas y enlazadas con navegación fluida.
- [x] Portafolio editorial con filtrado interactivo funcional.
- [x] Archivos de datos desacoplados para mantenimiento autónomo de contenidos.
- [x] Formulario interactivo con animaciones de éxito y feedback sensorial.
- [x] Optimización de rendimiento, accesibilidad y Core Web Vitals.
- [x] Configuración de SEO, OpenGraph para redes sociales, `robots.ts` y `sitemap.ts`.
- [x] Repositorio Git estructurado y código limpio libre de dependencias no utilizadas.

---

## 🤝 11. Créditos y Soporte

* **Cliente:** [HOZLY Agencia Digital](https://hozly.agency) — *Marketing · Publicidad · Tecnología*
* **Desarrollo y Dirección de Diseño:** [Faidev Studio](https://faidevstudio.com) (Fainner Ramírez)
* **Contacto de soporte y mantenimiento:** `contacto@hozly.agency` / [faidevstudio.com](https://faidevstudio.com)

---

*Documento técnico de entrega elaborado para HOZLY Agencia Digital. Todos los derechos reservados.*
