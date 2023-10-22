'use client';
import styles from './page.module.scss'
import { getGPTResponse } from '@/lib/GPT/getGPTResponse'
import Button from '@/components/button/button';
import Logo from '@/components/logo/logo';
import { FORM_QUESTIONS } from '@/lib/quiz/quiz.questions';
import React from 'react';
import { Question } from '@/types/quiz/question.types';

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
  const formRef = React.useRef<HTMLFormElement>(null);
  const [formProgress, setFormProgress] = React.useState(0);
  const [questions, setQuestions] = React.useState(FORM_QUESTIONS)
  function handleBeginQuiz() {
    console.log('eei')
    if (!formRef.current?.children.length) return;
    formRef.current?.children[0]?.scrollIntoView({ behavior: 'smooth' });
    console.log("👻 ~ handleBeginQuiz ~ formRef.current?.children[0]:", formRef.current?.children[0]);
    console.log('adf')
    setFormProgress((0) / questions.length);
  }
  function handleOptionSelected(question: Question, option: string, index: number) {
    console.log(question, option);
    const children = formRef.current?.children;
    if (!children || index >= questions.length) return;
    children[index + 1].scrollIntoView({ behavior: 'smooth' });
    setFormProgress((index + 1) / questions.length);
  }
  function handleGoBack(index: number) {
    const children = formRef.current?.children;
    // TODO: MAYBE: Add little shake to goback button
    if (!children || index <= 0) return;
    children[index - 1].scrollIntoView({ behavior: 'smooth' });
    setFormProgress((index - 1) / questions.length);
  }
  return (
    <main className={styles.main}>
      <div className={styles.splash}>
        <Logo className={styles.splash__logo} />
        <h1 className={styles.splash__title}>¿No sabes qué leer? ¡Danos dineros!</h1>
        <Button action={handleBeginQuiz} variant='secondary' className={styles.splash__action}>Empezar el test</Button>
      </div>
      <div className={styles.form__progress} style={{ '--progress': formProgress } as React.CSSProperties}></div>
      <form className={styles.form} ref={formRef}>
        {questions.map((question, index) => (
          <section key={question.description} className={styles.form__section}>
            <header>
              <h1>{question.title}</h1>
              <p>{question.description}</p>
            </header>
            <main>
              {question.options?.map(option => (
                <Button variant='secondary' action={() => handleOptionSelected(question, option, index)} key={option} className={styles.question}>{option}</Button>
              ))}
            </main>
            <footer>
              <Button variant='secondary' action={() => handleGoBack(index)} className={styles.form__section__back}>Atrás</Button>
            </footer>
          </section>
        ))}
      </form>
    </main>
  )
}
