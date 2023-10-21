"use server";
import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function getGPTResponse(userInput: QuizInput) {
  let response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          'Estás programado para recomendar libros basándote en las respuestas a un conjunto específico de preguntas. Al recibir las respuestas, tu objetivo es sugerir cinco libros que se adapten mejor a esas preferencias. Por favor, proporciona recomendaciones literarias en formato json en español tal que:\n\n[ {"book": "author" : "", "description": ""}]\n\nThe JSON object:\n`.trim()\n',
      },
      {
        role: "user",
        content: JSON.stringify(userInput),
      },
    ],
    temperature: 0,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  let books;
  if (response.choices[0].message.content) {
     books = JSON.parse(response.choices[0].message.content);
  } else {
    console.error("Content is null");
    // Handle the null case accordingly
  }

  return books;
}

// This code is for v4 of the openai package: npmjs.com/package/openai

// const response = await openai.chat.completions.create({
//   model: "gpt-3.5-turbo",
//   messages: [
//     {
//       "role": "system",
//       "content": "Estás programado para recomendar libros basándote en las respuestas a un conjunto específico de preguntas. Al recibir las respuestas, tu objetivo es sugerir cinco libros que se adapten mejor a esas preferencias. Por favor, proporciona recomendaciones literarias según las respuestas recibidas"
//     },
//     {
//       "role": "user",
//       "content": "{\n    \"genero\": \"Fantasía\",\n    \"atmosfera\": \"Aventurero\",\n    \"longitud\": \"Mediano (200-500 páginas)\",\n    \"tema\": \"Clásico\",\n    \"protagonista\": \"Heroico\",\n    \"ubicacion\": \"Europa\",\n    \"tiempo_historico\": \"Edad Media\",\n    \"elementos\": \"Magia o elementos sobrenaturales\",\n    \"complejidad\": \"Lírico y poético\",\n    \"preferencia_autores\": \"Tolkien\",\n    \"libros_anteriores\": \"El Señor de los Anillos\"\n}"
//     },
//     {
//       "role": "assistant",
//       "content": "Basado en tus respuestas, te recomendaría leer \"Las Crónicas de Narnia\" de C.S. Lewis. Este libro de fantasía clásica tiene una atmósfera aventurera y está ambientado en Europa durante la Edad Media. Incluye elementos de magia y criaturas sobrenaturales, y presenta un protagonista heroico. Además, al igual que \"El Señor de los Anillos\" de J.R.R. Tolkien, \"Las Crónicas de Narnia\" también tienen una longitud mediana de alrededor de 200-500 páginas."
//     },
//     {
//       "role": "assistant",
//       "content": "Basado en tus respuestas, te recomendaría leer los siguientes libros:\n\n1. \"El nombre del viento\" de Patrick Rothfuss: Este libro de fantasía épica tiene una atmósfera aventurera y presenta un protagonista heroico. Está ambientado en un mundo lleno de magia y elementos sobrenaturales. Tiene una longitud mediana de alrededor de 200-500 páginas.\n\n2. \"El último deseo\" de Andrzej Sapkowski: Esta novela de fantasía oscura sigue las aventuras de Geralt de Rivia, un cazador de monstruos. Tiene una atmósfera aventurera y está ambientada en un mundo lleno de magia y criaturas sobrenaturales. Tiene una longitud mediana de alrededor de 200-500 páginas.\n\n3. \"El ojo del mundo\" de Robert Jordan: Este es el primer libro de la serie \"La Rueda del Tiempo\", una epopeya de fantasía que sigue a un grupo de jóvenes en una aventura épica. Tiene una atmósfera aventurera y está ambientado en un mundo lleno de magia y elementos"
//     }
//   ],
//   temperature: 0,
//   max_tokens: 256,
//   top_p: 1,
//   frequency_penalty: 0,
//   presence_penalty: 0,
// });
