type QuizInput = {
  genre:
    | "Novela histórica"
    | "Ciencia ficción"
    | "Fantasía"
    | "Romance"
    | "Misterio/thriller"
    | "No ficción"
    | "Otro";
  atmosphere?:
    | "Oscuro y misterioso"
    | "Alegre y optimista"
    | "Romántico"
    | "Aventurero"
    | "Reflexivo";
  length?:
    | "Corto (menos de 200 páginas)"
    | "Mediano (200-500 páginas)"
    | "Largo (más de 500 páginas)";
  theme?: "Contemporáneo" | "Clásico" | "Indiferente";
  protagonist?: "Heroico" | "Anti-héroe" | "Cotidiano" | "Histórico" | "Otro";
  location?: "América" | "Europa" | "Asia" | "África" | "No tengo preferencia";
  historicalTime?:
    | "Antigüedad"
    | "Edad Media"
    | "Siglo XIX"
    | "Siglo XX"
    | "Actualidad"
    | "Futuro";
  elements?:
    | "Magia o elementos sobrenaturales"
    | "Tecnología avanzada"
    | "Romance"
    | "Conflicto político o social"
    | "Viajes en el tiempo";
  complexity?:
    | "Sencillo y directo"
    | "Complejo y con profundidad"
    | "Lírico y poético";
  authorPreference?: string;
  previousBooks?: string;
};
