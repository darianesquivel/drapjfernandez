export const SITE = {
  // Versión canónica del dominio: sin www. Hoy Hostinger sirve www y no-www con
  // 200 en ambos, hay que agregar un 301 de www -> no-www en el panel.
  url: "https://drafernandez.com.ar",
  name: "Dra. Pamela J. Fernandez",
  legalName: "Dra. Pamela Judith Fernandez",
  defaultTitle:
    "Cirujana Bariátrica y General en Zona Norte | Dra. Pamela J. Fernandez",
  defaultDescription:
    "Cirujana especialista en cirugía bariátrica, general y percutánea en Zona Norte y CABA. Manga gástrica, bypass y laparoscopía. Consultá tu turno.",
  locale: "es_AR",
} as const;

export const CONTACT = {
  phone: "+5491128808666",
  phoneDisplay: "011 2880-8666",
  whatsapp: "5491128808666",
  email: "",
  instagram: "",
} as const;

export const CREDENTIALS = {
  mn: "167712",
  mp: "456054",
} as const;

/**
 * Lugares donde atiende pacientes (distinto de los centros donde opera).
 * El primero es la sede principal: es la que alimenta el JSON-LD y la que debe
 * coincidir con el perfil de Google Business.
 */
export const OFFICES = [
  {
    name: "Sanatorio Las Lomas - Sede Nordelta",
    kind: "Consultorio privado",
    street: "Av. de los Lagos 6785",
    locality: "Nordelta, Tigre",
    region: "Buenos Aires",
    postalCode: "1670",
    country: "AR",
    lat: -34.4004847,
    lng: -58.6530865,
    mapsUrl:
      "https://www.google.com/maps/place/Sanatorio+Las+Lomas+-+Sede+Nordelta/@-34.4004847,-58.6530865,17z",
    mapEmbedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.687445903964!2d-58.65780522379377!3d-34.41018265147551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bda47d2a57173d%3A0x7d27e2a9b3a62858!2sSanatorio%20Las%20Lomas%20Nordelta!5e0!3m2!1ses-419!2sar!4v1750000000001!5m2!1ses-419!2sar",
    hours: [{ days: ["Wednesday"], opens: "08:00", closes: "11:30" }],
    hoursDisplay: "Miércoles de 8:00 a 11:30 hs",
  },
  {
    name: 'Hospital Interzonal General de Agudos "Eva Perón" (ex Castex)',
    kind: "Hospital público",
    street: "Av. Dr. Ricardo Balbín 3200",
    locality: "Villa Juan Martín de Pueyrredón, General San Martín",
    region: "Buenos Aires",
    postalCode: "1650",
    country: "AR",
    lat: -34.5717251,
    lng: -58.5540372,
    mapsUrl:
      "https://www.google.com/maps/place/Hospital+Interzonal+General+de+Agudos+%22Eva+Per%C3%B3n%22+(ex+Castex)/@-34.5717251,-58.5540372,17z",
    mapEmbedSrc:
      "https://www.google.com/maps?q=Hospital+Interzonal+General+de+Agudos+Eva+Peron+ex+Castex,+Av.+Ricardo+Balbin+3200,+San+Martin&output=embed",
    hours: [],
    // PENDIENTE: cuando la Dra. confirme día y horario de consultorio en el
    // hospital, cargarlos acá y en `hours` (formato ISO para el JSON-LD).
    hoursDisplay: "Días y horarios a confirmar por WhatsApp",
  },
] as const;

/** Sede principal: la que va al JSON-LD y al perfil de Google. */
export const OFFICE = OFFICES[0];

export const AREAS_SERVED = [
  "Tigre",
  "Nordelta",
  "San Isidro",
  "Vicente López",
  "San Fernando",
  "General San Martín",
  "Ciudad Autónoma de Buenos Aires",
] as const;

/**
 * Genera el link de WhatsApp con un mensaje que identifica de dónde salió el
 * click, para poder atribuir consultas a cada sección/página.
 */
export function waLink(source: string): string {
  const text = `Hola, te contacto desde la web (${source}). Quisiera solicitar un turno.`;
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
}
