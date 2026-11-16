/**
 * Dades de Pasi Disseny, S.L. publicades a la seva fitxa de Xarxa Industrial
 * i als registres (NIF B61549879, constituïda el 1998, comptes presentats 2025).
 */
export const empresa = {
  name: 'Pasi Disseny',
  legalName: 'Pasi Disseny, S.L.',
  since: 1998,
  street: 'C/ Isidre Nonell, 3',
  postalCode: '08911',
  city: 'Badalona',
  region: 'Barcelona',
  phone: { display: '933 84 73 02', e164: '+34933847302' },
  email: 'pasidisseny@hotmail.com',
  maps: 'https://www.google.com/maps/dir/?api=1&destination=41.458561%2C2.260945',
  geo: { lat: 41.458561, lng: 2.260945 },
} as const;

export const telUrl = `tel:${empresa.phone.e164}`;
export const mailUrl = `mailto:${empresa.email}?subject=${encodeURIComponent('Presupuesto de mobiliario a medida')}`;

/** «…tanto a nivel particular, como a empresas, decoradores y arquitectos». */
export const clientes = [
  { t: 'Particulares', d: 'Armarios, librerías y muebles hechos para tu casa, a la medida exacta.' },
  { t: 'Empresas y comercios', d: 'Tiendas, librerías, oficinas y stands de feria, del diseño al montaje.' },
  { t: 'Decoradores', d: 'Fabricamos lo que dibujas, con los acabados que pide el proyecto.' },
  { t: 'Arquitectos', d: 'Ebanistería e instalaciones para obra nueva y reformas.' },
] as const;

export const fases = [
  { id: 'diseno', n: '01', t: 'Diseño', d: 'Partimos de tus medidas, tus planos o los de tu decorador o arquitecto.' },
  { id: 'despiece', n: '02', t: 'Despiece', d: 'Cada mueble se divide en piezas: costados, baldas, trasera, zócalo.' },
  { id: 'fabricacion', n: '03', t: 'Fabricación', d: 'Cortamos, mecanizamos y acabamos cada pieza en el taller.' },
  { id: 'montaje', n: '04', t: 'Montaje', d: 'Nuestro equipo lo monta en su sitio, aquí o en el resto de España y Europa.' },
] as const;

/** Fotos de la fitxa: projectes reals de l'empresa. */
export const proyectos = [
  { n: 1, tipo: 'Comercio', t: 'Librería', d: 'Paredes de listones y mesas expositoras en madera clara.' },
  { n: 2, tipo: 'Comercio', t: 'Librería', d: 'Estanterías altas y mesas centrales en madera oscura.' },
  { n: 3, tipo: 'Comercio', t: 'Librería', d: 'Estanterías y mostradores bajo una bóveda.' },
  { n: 4, tipo: 'Comercio', t: 'Librería', d: 'Sección de cine con mesas y estanterías a medida.' },
  { n: 5, tipo: 'Stand', t: 'Stand de feria', d: 'Vitrinas y mostradores en negro con luz integrada.' },
  { n: 6, tipo: 'Stand', t: 'Stand de feria', d: 'Vista general del stand con zonas de exposición.' },
  { n: 7, tipo: 'Stand', t: 'Stand de feria', d: 'Stand en negro durante la feria.' },
  { n: 8, tipo: 'Stand', t: 'Stand de feria', d: 'Fachada del stand con paneles y pantallas.' },
] as const;
