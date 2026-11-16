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
export const mailUrl = (asunto: string) => `mailto:${empresa.email}?subject=${encodeURIComponent(asunto)}`;

import type { Lang } from '../i18n/ui';

/** «…tanto a nivel particular, como a empresas, decoradores y arquitectos». */
const clientesI18n = {
  es: [
    { t: 'Particulares', d: 'Armarios, librerías y muebles hechos para tu casa, a la medida exacta.' },
    { t: 'Empresas y comercios', d: 'Tiendas, librerías, oficinas y stands de feria, del diseño al montaje.' },
    { t: 'Decoradores', d: 'Fabricamos lo que dibujas, con los acabados que pide el proyecto.' },
    { t: 'Arquitectos', d: 'Ebanistería e instalaciones para obra nueva y reformas.' },
  ],
  ca: [
    { t: 'Particulars', d: 'Armaris, llibreries i mobles fets per a casa teva, a la mida exacta.' },
    { t: 'Empreses i comerços', d: 'Botigues, llibreries, oficines i estands de fira, del disseny al muntatge.' },
    { t: 'Decoradors', d: 'Fabriquem el que dibuixes, amb els acabats que demana el projecte.' },
    { t: 'Arquitectes', d: 'Ebenisteria i instal·lacions per a obra nova i reformes.' },
  ],
};
export const clientes = (lang: Lang) => clientesI18n[lang];

const fasesI18n = {
  es: [
    { n: '01', t: 'Diseño', d: 'Partimos de tus medidas, tus planos o los de tu decorador o arquitecto.' },
    { n: '02', t: 'Despiece', d: 'Cada mueble se divide en piezas: costados, baldas, trasera, zócalo.' },
    { n: '03', t: 'Fabricación', d: 'Cortamos, mecanizamos y acabamos cada pieza en el taller.' },
    { n: '04', t: 'Montaje', d: 'Nuestro equipo lo monta en su sitio, aquí o en el resto de España y Europa.' },
  ],
  ca: [
    { n: '01', t: 'Disseny', d: 'Partim de les teves mides, dels teus plànols o dels del teu decorador o arquitecte.' },
    { n: '02', t: 'Especejament', d: 'Cada moble es divideix en peces: costats, prestatges, darrera, sòcol.' },
    { n: '03', t: 'Fabricació', d: 'Tallem, mecanitzem i acabem cada peça al taller.' },
    { n: '04', t: 'Muntatge', d: 'El nostre equip el munta al seu lloc, aquí o a la resta de l’Estat i d’Europa.' },
  ],
};
export const fases = (lang: Lang) => fasesI18n[lang];

/** Fotos de la fitxa: projectes reals de l'empresa. */
const tipus = ['Comercio', 'Comercio', 'Comercio', 'Comercio', 'Stand', 'Stand', 'Stand', 'Stand'] as const;
const proyectosI18n = {
  es: [
    ['Librería', 'Paredes de listones y mesas expositoras en madera clara.'],
    ['Librería', 'Estanterías altas y mesas centrales en madera oscura.'],
    ['Librería', 'Estanterías y mostradores bajo una bóveda.'],
    ['Librería', 'Sección de cine con mesas y estanterías a medida.'],
    ['Stand de feria', 'Vitrinas y mostradores en negro con luz integrada.'],
    ['Stand de feria', 'Vista general del stand con zonas de exposición.'],
    ['Stand de feria', 'Stand en negro durante la feria.'],
    ['Stand de feria', 'Fachada del stand con paneles y pantallas.'],
  ],
  ca: [
    ['Llibreria', 'Parets de llistons i taules expositores en fusta clara.'],
    ['Llibreria', 'Prestatgeries altes i taules centrals en fusta fosca.'],
    ['Llibreria', 'Prestatgeries i taulells sota una volta.'],
    ['Llibreria', 'Secció de cinema amb taules i prestatgeries a mida.'],
    ['Estand de fira', 'Vitrines i taulells en negre amb llum integrada.'],
    ['Estand de fira', 'Vista general de l’estand amb zones d’exposició.'],
    ['Estand de fira', 'Estand en negre durant la fira.'],
    ['Estand de fira', 'Façana de l’estand amb panells i pantalles.'],
  ],
};
export const proyectos = (lang: Lang) => proyectosI18n[lang].map(([t, d], i) => ({ n: i + 1, tipo: tipus[i]!, t: t!, d: d! }));
