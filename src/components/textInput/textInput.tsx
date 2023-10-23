'use client';
import Button from '../button/button';
import styles from './textInput.module.scss';
import { useRef, useState } from 'react'
type TextInputProps = {
  onSubmit: (value: string) => void;
  onChange: (value: string) => void;
  value?: string;
  placeholder?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  options: { multiple?: boolean, max_answers?: number }
}

const MAX_CHARACTERS = 200;

export default function TextInput({ value, placeholder, className, options, onSubmit, onChange }: TextInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [current, setCurrent] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);

  function handleAddAnswer() {
    setAnswers(answers.concat(current));
    inputRef.current?.value ? inputRef.current.value = '' : undefined;
  }
  function handleInput() {
    if (!inputRef.current?.value) return;

    setCurrent(inputRef.current?.value);
    onChange(inputRef.current?.value);
  }
  function handleRemoveAnswer(index: number) {
    setAnswers(answers.filter((answers, i) => i !== index));
  }
  function handleKeyDown(event: React.KeyboardEvent) {
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
            <span onClick={() => handleRemoveAnswer(index)}>x</span>
          </li>
        ))}
      </ul>
    </>

  );
}
