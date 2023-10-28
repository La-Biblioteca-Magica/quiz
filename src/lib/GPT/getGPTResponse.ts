"use server";
import OpenAI from "openai";
import { books } from "@googleapis/books";
import { Answer } from "@/app/page";

const booksApi = books({
  auth: process.env.GOOGLE_API_KEY,
  version: "v1",
  key: process.env.GOOGLE_API_KEY,
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const options = {
  key: process.env.GOOGLE_API_KEY,
  field: "title",
  offset: 0,
  limit: 1,
  type: "books",
  order: "relevance",
  lang: "es",
};

export async function getGPTResponse(userInput: Answer[]) {
  try {
    const gptResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [ 
        {
          role: "system",
          content:
            "Estás programado para recomendar libros basándote en las respuestas a un conjunto específico de preguntas. Al recibir las respuestas, tu objetivo es sugerir cinco libros que se adapten mejor a esas preferencias. Por favor, proporciona recomendaciones literarias en formato json en español: [{book: 'libro que me recomiendas', author:'autor'}]",
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

    if (!gptResponse.choices[0]?.message?.content) {
      console.error("GPT-3 response content is null");
      // Handle the null case accordingly
      return [];
    }

    const gptBooks = JSON.parse(
      gptResponse.choices[0].message.content
    ) as BookInfo[];

    const filteredBooks = await Promise.all(
      gptBooks.map(async (book) => {
        if (await searchBook(book)) {
          return book;
        }
        return null; // Filter out books that don't have results
      })
    );

    const validBooks = filteredBooks.filter((book) => book !== null);

    return validBooks;
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

async function searchBook(book: BookInfo) {
  const searchQuery = `${book.book} inauthor:${book.author}`;
  let results;
  try {
    results = await booksApi.volumes.list({
      q: searchQuery,
      langRestrict: options.lang,
      maxResults: options.limit,
      orderBy: options.order === "relevance" ? "relevance" : undefined, // La API de Google Books solo admite 'relevance' y 'newest' para 'orderBy'
      printType: options.type.toUpperCase(), // Convertir a mayúsculas, ya que la API espera 'BOOKS', 'MAGAZINES', etc.
      key: options.key,
    });
  } catch (error) {
    console.log("Not found on google books", error);
  }

  return results;
}
