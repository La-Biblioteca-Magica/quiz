'use client';
import styles from './button.module.scss';
import { ButtonVariant } from "./button.types";

export default function Button({ action, children, variant }: { action: Function, children: React.ReactNode, variant?: ButtonVariant }) {
  function handleAction() {
    action();
  }
  function classList() {

    return `${styles.button} ${styles[variant || 'primary']}`
  }
  return <div className={styles.wrapper}>
    <button onClick={handleAction} className={classList()}>
      <span className={styles.button__children}>
        {children}
      </span>
    </button>
  </div>
}