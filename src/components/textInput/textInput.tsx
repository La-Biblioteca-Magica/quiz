'use client';
import Button from '../button/button';
import styles from './textInput.module.scss';
import { useRef, useState } from 'react'
type TextInputProps = {
  onSubmit: (value: string) => void;
  onDelete: (index: number) => void;
  value?: string;
  placeholder?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  options: { multiple?: boolean, max_answers?: number }
}

const MAX_CHARACTERS = 200;

export default function TextInput({ value, placeholder, className, options, onSubmit, onDelete }: TextInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [current, setCurrent] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);

  function handleAddAnswer() {
    if (!inputRef.current?.value) return;
    if (answers.includes(inputRef.current.value)) return;

    setAnswers(answers.concat(current));
    onSubmit(current);
    inputRef.current?.value ? inputRef.current.value = '' : undefined;
  }
  function handleInput() {
    if (!inputRef.current?.value) return;

    setCurrent(inputRef.current?.value);
  }
  function handleRemoveAnswer(index: number) {
    onDelete(index);
    setAnswers(answers.filter((answers, i) => i !== index));
  }
  function handleKeyDown(event: React.KeyboardEvent) {
    if (!inputRef.current?.value) return;
    if (event.key === 'Enter') {
      handleAddAnswer();
    }
  }
  return (
    <>
      <div className={styles.wrapper}>
        <div className={`${styles.input__wrapper} ${className ?? ''}`}>
          <input
            value={value}
            className={styles.input}
            placeholder={placeholder}
            maxLength={MAX_CHARACTERS}
            onInput={handleInput}
            ref={inputRef}
            onKeyDown={handleKeyDown}
          />
        </div>
        {options?.multiple && <Button
          variant='secondary'
          action={handleAddAnswer}
          className={styles.button}
        >+ Añadir
        </Button>}
      </div>
      <ul className={styles.answers}>
        {Boolean(answers.length) && answers.map((answer, index) => (
          <li key={answer}>
            <span>{answer}</span>
            <span onClick={() => handleRemoveAnswer(index)} className={styles.close}>x</span>
          </li>
        ))}
      </ul>
    </>

  );
}
