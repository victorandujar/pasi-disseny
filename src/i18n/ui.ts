/** Textos de la web en castellà (per defecte, a /) i català (a /ca). */
export type Lang = 'es' | 'ca';
export const langs: Lang[] = ['es', 'ca'];
export const home = (lang: Lang) => (lang === 'ca' ? '/ca' : '/');
export const legalPath = (lang: Lang, k: 'avis' | 'priv') =>
  lang === 'ca' ? (k === 'avis' ? '/ca/avis-legal' : '/ca/privacitat') : k === 'avis' ? '/aviso-legal' : '/privacidad';

export const ui = {
  es: {
    meta: {
      title: 'Pasi Disseny · Ebanistería y carpintería a medida en Badalona',
      description: 'Ebanistería y carpintería a medida desde 1998 en Badalona: mobiliario para comercios, librerías, stands de feria, particulares, decoradores y arquitectos. Tel. 933 84 73 02.',
    },
    skip: 'Saltar al contenido',
    demo: 'Propuesta de diseño no oficial',
    demoBy: 'Preparada por Ammavaroo para',
    tagline: 'Ebanistería · Badalona',
    nav: { proyectos: 'Proyectos', proceso: 'Cómo trabajamos', clientes: 'Para quién', contacto: 'Contacto', principal: 'Principal', idioma: 'Idioma' },
    hero: {
      eyebrow: 'Fusteria · Ebenisteria per decoració i instal·lacions',
      t1: 'Muebles a medida para', marca: 'tiendas, stands', t2: 'y casas.',
      text: (since: number) => `Desde ${since} hacemos ebanistería y carpintería a medida en Badalona: para particulares, empresas, decoradores y arquitectos. Fabricamos y montamos en toda España y Europa.`,
      cta: 'Pide presupuesto sin compromiso',
      alt: 'Librería con estanterías altas y mesas centrales de madera oscura hechas a medida',
      anys: 'años de oficio',
    },
    proyectos: {
      label: 'Proyectos', title: 'Hecho en el taller, montado donde haga falta.',
      text: 'Algunos de los espacios que hemos fabricado y montado. Pulsa una foto para verla grande.',
      grups: { Comercio: ['Comercios y librerías', 'Estanterías, mesas expositoras y mostradores fabricados y montados a medida del local.'], Stand: ['Stands de feria', 'Vitrinas, mostradores y paneles, con la luz integrada en el mueble.'] },
      ver: 'Ver grande', cerrar: 'Cerrar',
    },
    proceso: { label: 'Cómo trabajamos', title: 'Del plano al mueble montado.', aria: 'Estantería que se dibuja, se despieza, se fabrica y se monta al bajar por la página', fases: 'Fases' },
    clientes: { label: 'Para quién', title: 'Un mismo taller, cuatro tipos de encargo.', text: 'Contamos con un equipo propio de fabricación y de montaje. Trabajamos en todo el territorio nacional y en Europa.' },
    contacto: {
      label: 'Contacto', title: '¿Tienes un proyecto? Te pasamos presupuesto.',
      text: 'Mándanos planos, fotos o una idea, y te respondemos con presupuesto sin compromiso.',
      llegar: 'Cómo llegar', email: 'Email', tel: 'Teléfono', asunto: 'Presupuesto de mobiliario a medida',
    },
    bar: { pres: 'Presupuesto', llamar: 'Llamar', aria: 'Acciones rápidas' },
    footer: { avis: 'Aviso legal', priv: 'Privacidad' },
  },
  ca: {
    meta: {
      title: 'Pasi Disseny · Ebenisteria i fusteria a mida a Badalona',
      description: 'Ebenisteria i fusteria a mida des de 1998 a Badalona: mobiliari per a comerços, llibreries, estands de fira, particulars, decoradors i arquitectes. Tel. 933 84 73 02.',
    },
    skip: 'Salta al contingut',
    demo: 'Proposta de disseny no oficial',
    demoBy: 'Preparada per Ammavaroo per a',
    tagline: 'Ebenisteria · Badalona',
    nav: { proyectos: 'Projectes', proceso: 'Com treballem', clientes: 'Per a qui', contacto: 'Contacte', principal: 'Principal', idioma: 'Idioma' },
    hero: {
      eyebrow: 'Fusteria · Ebenisteria per decoració i instal·lacions',
      t1: 'Mobles a mida per a', marca: 'botigues, estands', t2: 'i cases.',
      text: (since: number) => `Des de ${since} fem ebenisteria i fusteria a mida a Badalona: per a particulars, empreses, decoradors i arquitectes. Fabriquem i muntem a tot l’Estat i a Europa.`,
      cta: 'Demana pressupost sense compromís',
      alt: 'Llibreria amb prestatgeries altes i taules centrals de fusta fosca fetes a mida',
      anys: 'anys d’ofici',
    },
    proyectos: {
      label: 'Projectes', title: 'Fet al taller, muntat on calgui.',
      text: 'Alguns dels espais que hem fabricat i muntat. Prem una foto per veure-la gran.',
      grups: { Comercio: ['Comerços i llibreries', 'Prestatgeries, taules expositores i taulells fabricats i muntats a mida del local.'], Stand: ['Estands de fira', 'Vitrines, taulells i panells, amb la llum integrada al moble.'] },
      ver: 'Veure gran', cerrar: 'Tancar',
    },
    proceso: { label: 'Com treballem', title: 'Del plànol al moble muntat.', aria: 'Prestatgeria que es dibuixa, s’especeja, es fabrica i es munta en baixar per la pàgina', fases: 'Fases' },
    clientes: { label: 'Per a qui', title: 'Un mateix taller, quatre tipus d’encàrrec.', text: 'Tenim un equip propi de fabricació i de muntatge. Treballem a tot el territori estatal i a Europa.' },
    contacto: {
      label: 'Contacte', title: 'Tens un projecte? Et passem pressupost.',
      text: 'Envia’ns plànols, fotos o una idea, i et responem amb un pressupost sense compromís.',
      llegar: 'Com arribar-hi', email: 'Correu', tel: 'Telèfon', asunto: 'Pressupost de mobiliari a mida',
    },
    bar: { pres: 'Pressupost', llamar: 'Trucar', aria: 'Accions ràpides' },
    footer: { avis: 'Avís legal', priv: 'Privacitat' },
  },
} as const;
