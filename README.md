# Pasi Disseny — propuesta de web

Demo de Ammavaroo para Pasi Disseny, S.L. (NIF B61549879), ebanistería y carpintería a medida en Badalona desde 1998. **No es la web oficial.**

## Por qué

No tienen web propia: solo una ficha en el directorio Xarxa Industrial y listados de Páginas Amarillas. Su email es de Hotmail. La sociedad está activa (cuentas presentadas en 2025).

## Identidad

- **Logo:** su logo (amarillo #FCC84E y gris #6D6C6A, con el perfil de una moldura) vectorizado con potrace a partir de la imagen de su ficha.
- **Paleta:** el amarillo y el gris del logo, con tonos de madera y negro para la sección de proyectos (los stands son negros).
- **Tipografía:** Instrument Sans (variable, con eje de anchura), autoalojada.
- **Elemento interactivo:** una estantería en isométrico que, al hacer scroll, se dibuja con cotas, se despieza, toma color madera y se monta. Sigue sus fases de trabajo (diseño, despiece, fabricación y montaje). La geometría se calcula al compilar y el movimiento lo controla una sola variable CSS. Respeta `prefers-reduced-motion`.

## Contenido y fuentes

- Textos: su ficha de Xarxa Industrial («desde 1998… particulares, empresas, decoradores y arquitectos… equipo de fabricación y montaje… territorio nacional y europeo»).
- Fotos: 8 proyectos reales de su ficha (librerías y stands de feria). Se han recortado los bordes blancos de los archivos. **No se usan** las 4 imágenes genéricas de la ficha (una ilustración y tres fotos de stock).
- Los pies de foto describen lo que se ve, sin nombrar clientes.

## Pendiente

- [ ] Confirmar en Google Maps que siguen activos en C/ Isidre Nonell (algunos directorios dicen el n.º 1 y otros el 3).
- [ ] Más fotos y proyectos recientes, sobre todo de particulares.
- [ ] Horario.

## Stack

Astro (SSG) · TypeScript estricto · Tailwind 4 · JS mínimo. Modo demo con `PUBLIC_IS_DEMO` (por defecto activo: `noindex`, `robots.txt` cerrado y aviso visible).

```bash
npm install
npm run dev
npm run build
```
