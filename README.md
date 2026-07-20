# Kabilio — Sitio de marketing

Sitio web de marketing de **Kabilio**, SaaS B2B de contabilidad colaborativa con IA para asesorías y gestorías en España.

Construido con **Next.js 14 (App Router)**, **TypeScript** y **Tailwind CSS**. Sin CMS, sin base de datos y sin autenticación: todo el contenido vive en archivos TypeScript dentro de `/content`.

## Requisitos

- Node.js 18.17 o superior
- npm (o pnpm / yarn)

## Levantar el proyecto en local

```bash
# 1. Instalar dependencias
npm install

# 2. Arrancar el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

Otros comandos:

```bash
npm run build   # Compilación de producción
npm run start   # Servir la build de producción en local
npm run lint    # Linter de Next.js
```

## Estructura del proyecto

```
kabilio-site/
├── app/                          # App Router (rutas y layouts)
│   ├── layout.tsx                # Layout raíz: fuente Inter, Header, Footer, metadata base
│   ├── globals.css               # Estilos globales + Tailwind
│   ├── page.tsx                  # / (Home)
│   ├── asesorias/page.tsx        # /asesorias
│   ├── gestorias/page.tsx        # /gestorias
│   ├── conciliacion-bancaria/page.tsx
│   ├── facturacion-ia/page.tsx
│   ├── precios/page.tsx
│   ├── contacto/page.tsx         # Formulario de demo (estático)
│   ├── sitemap.ts                # Sitemap automático
│   └── robots.ts                 # robots.txt automático
│
├── components/                   # Componentes reutilizables
│   ├── Header.tsx                # Navegación + CTA "Pedir demo" (menú móvil sin JS)
│   ├── Footer.tsx                # Footer con enlaces
│   ├── HeroSection.tsx           # Hero (H1, subtítulo, CTAs, mock)
│   ├── HeroMock.tsx              # Mock visual del producto (sin imágenes externas)
│   ├── FeatureGrid.tsx           # Grid de features (3 o 6)
│   ├── TestimonialSection.tsx    # Testimonios de clientes
│   ├── CTABanner.tsx             # Banda de conversión
│   ├── PricingCard.tsx           # Tarjeta de plan de precios
│   ├── StatsBand.tsx             # Banda de métricas
│   ├── StepsSection.tsx          # Sección "cómo funciona"
│   ├── SectionHeading.tsx        # Encabezado de sección (H2)
│   ├── ContactForm.tsx           # Formulario estático (client component)
│   ├── Button.tsx                # Botón/enlace con variantes
│   ├── Logo.tsx                  # Logotipo
│   └── Icon.tsx                  # Set de iconos SVG inline
│
├── content/                      # Contenido editable (sin CMS)
│   ├── site.ts                   # Marca, navegación, footer, CTA, datos de contacto
│   ├── home.ts
│   ├── asesorias.ts
│   ├── gestorias.ts
│   ├── conciliacion.ts
│   ├── facturacion.ts
│   └── precios.ts                # Planes + FAQs
│
├── lib/
│   └── seo.ts                    # Helper de metadata (title, description, canonical, OG)
│
├── public/                       # Activos estáticos (añade aquí og-image.png)
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
└── package.json
```

## Editar contenido

Todo el texto está en `/content/*.ts`. Para cambiar copy, features, testimonios o precios, edita el archivo correspondiente: no hace falta tocar los componentes.

## Marca

Los colores de marca están centralizados en `tailwind.config.ts` bajo `colors.brand` (primario) y `colors.accent` (secundario). Cambia esos valores para reajustar toda la identidad visual.

- **Primario:** `#1652F0` (azul)
- **Secundario:** `#00B37E` (verde)
- **Tipografía:** Inter (Google Fonts, cargada con `next/font`)

> Sustituye estos HEX por los definitivos de Kabilio cuando los tengas.

## SEO

- Cada página define su propio `title` y `description` mediante `buildMetadata()` en `lib/seo.ts`.
- El **canonical** y las etiquetas **Open Graph / Twitter** se generan automáticamente a partir de la ruta.
- Un único `<h1>` por página (lo emite `HeroSection` o la propia página); las secciones usan `<h2>`.
- `sitemap.xml` y `robots.txt` se generan automáticamente.
- Coloca una imagen `og-image.png` (1200×630) en `/public` para las previsualizaciones en redes.
- Actualiza `site.url` en `content/site.ts` con tu dominio real antes de desplegar.

## Formulario de contacto

El formulario de `/contacto` es **estático**: al enviarlo muestra un mensaje de confirmación en el cliente, sin enviar datos a ningún servidor. Para conectarlo a un backend o CRM, edita `handleSubmit` en `components/ContactForm.tsx`.

## Deploy en Vercel

La forma más sencilla de desplegar un proyecto Next.js es con [Vercel](https://vercel.com).

### Opción A — Desde la interfaz web (recomendada)

1. Sube el proyecto a un repositorio de GitHub, GitLab o Bitbucket.
2. Entra en [vercel.com/new](https://vercel.com/new) e importa el repositorio.
3. Vercel detecta Next.js automáticamente. No hay que configurar nada:
   - **Framework Preset:** Next.js
   - **Build Command:** `next build`
   - **Output:** gestionado por Vercel
4. Pulsa **Deploy**. En ~1 minuto tendrás una URL de producción.
5. En **Settings → Domains**, añade tu dominio (p. ej. `www.kabilio.ai`) y actualiza `site.url` en `content/site.ts`.

Cada `git push` a la rama principal genera un nuevo despliegue de producción; el resto de ramas y pull requests generan *preview deployments*.

### Opción B — Desde la CLI

```bash
npm i -g vercel     # instalar la CLI de Vercel (una sola vez)
vercel              # primer despliegue (preview); sigue las indicaciones
vercel --prod       # desplegar a producción
```

No se necesitan variables de entorno: el sitio no usa base de datos, autenticación ni servicios externos.
