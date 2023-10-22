'use client';
import Button from '../button/button';
import styles from './TextInput.module.scss';
import { useState } from 'react'
type TextInputProps = {
    onChange: (value: string) => void;
    onSubmit: (value: string) => void;
    value?: string;
    placeholder?: string;
    variant?: 'primary' | 'secondary';
    className?: string;
}

const maxWordsLenght = 200; //200 words max

export default function TextInput({ onChange, value, placeholder, className, onSubmit }: TextInputProps) {
    const [text, setText] = useState("");

    function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        if (onChange) {
            onChange(event.target.value);
        }
    }

    return (
        <div className={`${styles.wrapper} ${className ?? ''}`}>
            <textarea
                onChange={handleChange}
                value={value}
                className={styles.input}
                placeholder={placeholder}
                maxLength={maxWordsLenght}
            />
            <Button
                variant='secondary'
                action={() => onSubmit(value ?? "")}
                className={styles.question}
                active={true}
            > Siguiente
            </Button>
        </div>
    );
}
