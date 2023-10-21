"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { getGPTResponse } from '@/components/GPT/getGPTResponse'

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
      <button onClick={() => getGPTResponse(userResponses)}>
        clicka para hacer cosas pero no se muestra
      </button>
    </main>
  )
}
