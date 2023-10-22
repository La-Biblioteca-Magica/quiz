"use client"
import Image from 'next/image'
import styles from './page.module.scss'
import { getGPTResponse } from '@/lib/GPT/getGPTResponse'
import Button from '@/components/button/button';

const userResponses: QuizInput = {
  genre: 'Fantasía',
  atmosphere: 'Aventurero',
  length: 'Mediano (200-500 páginas)',
  theme: 'Clásico',
  protagonist: 'Heroico',
  location: 'Europa',
  historicalTime: 'Edad Media',
  elements: 'Magia o elementos sobrenaturales',
  complexity: 'Lírico y poético',
  authorPreference: 'Tolkien',
  previousBooks: 'El Señor de los Anillos'
};

export default function Home() {
  return (
    <main className={styles.main}>
      <img src="/logo.png" alt="Ilustracion de una biblioteca encantada" className={styles.main__logo} />
      <h1 className={styles.main__title}>¿No sabes qué leer? ¡Danos dineros!</h1>
      <Button action={() => getGPTResponse(userResponses)} variant='secondary'>Empezar el test</Button>
    </main>
  )
}
