'use client';
import styles from './button.module.scss';
import { ButtonVariant } from "./button.types";

export default function Button({ action, children, variant, className, active }: { action: Function, children: React.ReactNode, variant?: ButtonVariant, className?: string, active?: boolean }) {
  function handleAction() {
    action();
  }
  function classList() {
    return `${styles.button} ${styles[variant || 'primary']}`
  }
  return <div className={`${styles.wrapper} ${className ?? ''}`}>
    <button onClick={handleAction} className={classList()} type='button' aria-selected={active}>
      <span className={styles.button__children}>
        {children}
      </span>
    </button>
  </div>
}