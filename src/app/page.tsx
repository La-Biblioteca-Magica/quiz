'use client';
import styles from './page.module.scss'
import { getGPTResponse } from '@/lib/GPT/getGPTResponse'
import Button from '@/components/button/button';
import Logo from '@/components/logo/logo';
import { FORM_QUESTIONS } from '@/lib/quiz/quiz.questions';
import React, { useEffect } from 'react';
import { Question } from '@/types/quiz/question.types';
import TextInput from '@/components/textInput/textInput';

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

type Answer = {
  question: Question,
  options: string[]
}

export default function Home() {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [formData, setFormData] = React.useState<FormData | undefined>(undefined);
  const formQuestionsRef = React.useRef<HTMLDivElement>(null);
  const [questions, setQuestions] = React.useState(FORM_QUESTIONS);
  const [formProgress, setFormProgress] = React.useState(0);
  const [activeQuestion, setActiveQuestion] = React.useState(-1);
  const [answers, setAnswers] = React.useState<Answer[]>([])

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
    if (!formRef.current) return;
    setFormData(new FormData(formRef.current));
  }, []);
  useEffect(() => {
    if (!formQuestionsRef.current) return;
    if (activeQuestion < 0) {
      document.scrollingElement?.scrollTo({ top: 0, behavior: 'smooth' });
    }
    formQuestionsRef.current.children[activeQuestion]?.scrollIntoView({ behavior: 'smooth' });
    setFormProgress(activeQuestion >= 0 ? (activeQuestion / questions.length) : 0);
  }, [activeQuestion, questions.length]);

  function handleBeginQuiz() {
    if (!formRef.current?.children.length) return;
    setActiveQuestion(0);
  }
  function handleOptionSelected(question: Question, selectedOption: string) {
    setAnswers(prevAnswers => {
      const existingAnswer = prevAnswers.find(ans => ans.question.id === question.id);

      if (existingAnswer) {
        // Clone the existing options to avoid direct modifications
        const updatedOptions = [...existingAnswer.options];

        // Check if the option is already selected
        if (updatedOptions.includes(selectedOption)) {
          // Remove the option to deselect it
          const index = updatedOptions.indexOf(selectedOption);
          updatedOptions.splice(index, 1);
        } else {
          // Add the option to select it
          updatedOptions.push(selectedOption);
        }

        // Return the updated answers array
        return prevAnswers.map(ans =>
          ans.question.id === question.id
            ? { ...ans, options: updatedOptions }
            : ans
        );
      } else {
        // If there's no answer for the question yet, add it
        return [...prevAnswers, { question, options: [selectedOption] }];
      }
    });
    // setActiveQuestion(q => q + 1);
  }

  function handleTextInput(question: Question, text: string) {
    formData?.set(question.id, text);
  }

  function handleGoBack() {
    setActiveQuestion(q => q - 1);
  };

  function isOptionActive(question: Question, option: string) {
    const answerForQuestion = answers.find(a => a.question.id === question.id);
    return answerForQuestion?.options.includes(option) || false;
  }
  return (
    <main className={styles.main}>
      <div className={styles.splash} id='start'>
        <Logo className={styles.splash__logo} />
        <h1 className={styles.splash__title}>¿No sabes qué leer? ¡Danos dineros!</h1>
        <Button action={handleBeginQuiz} variant='secondary' className={styles.splash__action}>Empezar el test</Button>
      </div>
      <form className={styles.form} ref={formRef} aria-hidden={activeQuestion < 0}>
        <div className={styles.form__questions} ref={formQuestionsRef}>
          {questions.map((question, index) => (
            <section key={question.description} className={styles.form__section}>
              <header>
                <h1>{question.title}</h1>
                <p>{question.description}</p>
              </header>
              <main>
                {question.options && question.options.length > 0 ? (
                  question.options.map(option => (
                    <Button
                      variant='secondary'
                      action={() => handleOptionSelected(question, option)}
                      key={option}
                      className={styles.question}
                      active={isOptionActive(question, option)}
                    >
                      {option}
                    </Button>
                  ))
                ) : (
                  <TextInput onChange={(text) => handleTextInput(question, text)} onSubmit={(text) => handleOptionSelected(question, text)} options={{ multiple: true }} />
                )}
              </main>
              <input type="hidden" name={question.id} id={question.id} />
            </section>
          ))}
        </div>
        <footer>
          <div className={styles.form__progress} style={{ '--progress': formProgress } as React.CSSProperties}></div>
          <Button variant='secondary' action={handleGoBack} className={styles.form__section__back}>Atrás</Button>
        </footer>
      </form>
    </main>
  )
}
