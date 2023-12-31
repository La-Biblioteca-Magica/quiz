import { Question } from "@/types/quiz/question.types";

export const FORM_QUESTIONS: Question[] = [
  {
    title: "Género literario",
    description: "Elige el género o los géneros literarios que más te gusten. Puedes elegir hasta un máximo de 3.",
    id: "genre",
    options: [
      "Acción y aventura",
      "Autobiografía",
      "Biografía",
      "Ciencia ficción",
      "Drama",
      "Épica",
      "Histórica",
      "Humor",
      "Infantil",
      "Juvenil",
      "Misterio",
      "Novela",
      "Policial",
      "Romance",
      "Terror",
      "Thriller",
      "Western",
      "Filosófica",
      "Distópica",
      "Utópica",
      "Erótica",
      "Espionaje",
      "Negra",
      "Sobrenatural",
      "Teatro",
      "Tragedia",
      "Viajes",
      "Fantasía oscura",
      "Alta fantasía",
      "Fantasía urbana",
      "Poesía",
      "Parodia",
      "Pastoral",
      "Novela rosa",
      "Novela gótica",
      "Cuento de hadas",
      "Mitopoeia",
      "Fantasía",
      "Ciencia ficción ",
      "Romance paranormal",
      "Realismo mágico",
    ],
  },
  {
    title: "Atmósfera del libro",
    description: "¿Qué tipo de ambiente o tono prefieres en tus lecturas? Puedes elegir hasta un máximo de 3.",
    id: "atmosphere",
    options: [
      "Oscuro y misterioso",
      "Alegre y optimista",
      "Romántico",
      "Aventurero",
      "Reflexivo",
    ],
  },
  {
    title: "Longitud del libro",
    description: "¿Prefieres libros cortos, medianos o largos?",
    id: "length",
    options: [
      "Corto (menos de 200 páginas)",
      "Mediano (200-500 páginas)",
      "Largo (más de 500 páginas)",
      "No tengo preferencia",
    ],
  },
  {
    title: "Tipo de protagonista",
    description: "¿Qué tipo de personaje principal te gusta más en un libro? Puedes elegir hasta un máximo de 3.",
    id: "protagonist",
    options: [
      "Heroico",
      "Anti-héroe",
      "Cotidiano",
      "Histórico",
      "Místico o espiritual",
      "Villano como protagonista",
      "Protagonista femenino fuerte",
      "Niño/adolescente",
      "Sabio",
      "Explorador y aventurero",
      "Romántico",
      "Detective",
      "Monstruo o criatura no humana",
      "Alegre"
    ],
  },
  {
    title: "Tiempo histórico",
    description: "¿Te gustaría que la trama se desarrollara en una época en concreto? Puedes elegir hasta un máximo de 3.",
    id: "historicalTime",
    options: [
      "Antigüedad",
      "Imperio Romano",
      "Edad Media",
      "Siglo XIX",
      "Siglo XX",
      "Actualidad",
      "Futuro",
      "Realidad paralela",
      "No tengo preferencia",
    ],
  },
  {
    title: "Elementos adicionales",
    description:
      "¿Hay algún elemento específico que te gustaría encontrar en el libro? Puedes elegir hasta un máximo de 3.",
    id: "elements",
    options: [
      "Magia o elementos sobrenaturales",
      "Tecnología avanzada",
      "Romance",
      "Conflicto político o social",
      "Viajes en el tiempo",
      "Criaturas míticas",
      "Intriga",
      "Exploración espacial",
      "Desastres naturales o apocalipsis",
      "Historias basadas en hechos reales",
      "Deportes",
      "Supervivencia",
      "Elementos históricos",
      "Crimen",
      "Aventuras en la naturaleza",
      "Temas psicológicos",
      "Ninguno",
    ],
  },
  {
    title: "Nivel de complejidad",
    description:
      "En cuanto al estilo y profundidad, ¿cómo prefieres tu lectura? Puedes elegir hasta un máximo de 3.",
    id: "complexity",
    options: [
      "Sencillo y directo",
      "Complejo y con profundidad",
      "Lírico y poético",
      "No me importa",
    ],
  },
  {
    title: "Preferencia de autores",
    description:
      "¿Hay algún autor o autora que particularmente disfrutes? Puedes elegir hasta un máximo de 3.",
    id: "authorPreference",
  },
  {
    title: "Libros anteriores",
    description:
      "Menciona algunos libros que hayas leído recientemente y qué te parecieron. Puedes elegir hasta un máximo de 3.",
    id: "previousBooks",
  },
];
