'use client';
import Button from "@/components/button/button";

export default function Concact() {
  function gotoindex() {
    globalThis.location.href = '/'
  }
  return <main style={{ paddingInline: 16 }}>
    <p>La biblioteca mágica es un proyecto conjunto entre dos chavalines que buscan recomendar libros a todo el mundo de una manera personalizada y divertida.</p>
    <p>Si quieres hablar con ellos, puedes enviar un correo a <a href="mailto:cmg2512@gmail.com" style={{ color: 'white' }}>su correo</a>.</p>
    <p>Disfruta de tu estancia y ¡suerte encontrando tu próxima lectura!</p>
    <Button action={() => gotoindex()}>Volver a la página principal</Button>
  </main>
}