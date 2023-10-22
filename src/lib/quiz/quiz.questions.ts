import { Question } from "@/types/quiz/question.types";

export const FORM_QUESTIONS: Question[] = [
  {
    title: "Género literario",
    description: "Elige el género literario que más te atraiga o te interese.",
    id: "genre",
    options: ["Novela histórica", "Ciencia ficción", "Fantasía", "Romance", "Misterio/thriller", "No ficción", "Otro"]
  },
  {
    title: "Atmósfera del libro",
    description: "¿Qué tipo de ambiente o tono prefieres en tus lecturas?",
    id: "atmosphere",
    options: ["Oscuro y misterioso", "Alegre y optimista", "Romántico", "Aventurero", "Reflexivo"]
  },
  {
    title: "Longitud del libro",
    description: "¿Prefieres libros cortos, medianos o largos?",
    id: "length",
    options: ["Corto (menos de 200 páginas)", "Mediano (200-500 páginas)", "Largo (más de 500 páginas)"]
  },
  {
    title: "Tema principal",
    description: "¿Te interesan más los temas actuales o los clásicos?",
    id: "theme",
    options: ["Contemporáneo", "Clásico", "Indiferente"]
  },
  {
    title: "Tipo de protagonista",
    description: "¿Qué tipo de personaje principal te resulta más atractivo?",
    id: "protagonist",
    options: ["Heroico", "Anti-héroe", "Cotidiano", "Histórico", "Otro"]
  },
  {
    title: "Ubicación geográfica",
    description: "¿En qué región del mundo te gustaría que se desarrolle la historia?",
    id: "location",
    options: ["América", "Europa", "Asia", "África", "No tengo preferencia"]
  },
  {
    title: "Tiempo histórico",
    description: "¿En qué periodo histórico te gustaría que se sitúe la trama?",
    id: "historicalTime",
    options: ["Antigüedad", "Edad Media", "Siglo XIX", "Siglo XX", "Actualidad", "Futuro"]
  },
  {
    title: "Elementos adicionales",
    description: "¿Hay algún elemento específico que te gustaría encontrar en el libro?",
    id: "elements",
    options: ["Magia o elementos sobrenaturales", "Tecnología avanzada", "Romance", "Conflicto político o social", "Viajes en el tiempo"]
  },
  {
    title: "Nivel de complejidad",
    description: "En cuanto al estilo y profundidad, ¿cómo prefieres tu lectura?",
    id: "complexity",
    options: ["Sencillo y directo", "Complejo y con profundidad", "Lírico y poético"]
  },
  {
    title: "Preferencia de autores",
    description: "¿Hay algún autor o autora que particularmente disfrutes o quieras evitar?",
    id: "authorPreference"
  },
  {
    title: "Libros anteriores",
    description: "Menciona algunos libros que hayas leído recientemente y qué te parecieron.",
    id: "previousBooks"
  }
];