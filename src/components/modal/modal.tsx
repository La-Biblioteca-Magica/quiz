"use client"
import styles from './modal.module.scss';
import Button from '../button/button';

interface ModalProps {
  isOpen: boolean;
  onAccept: () => void;
  onCancel: () => void;
}
const Modal: React.FC<ModalProps> = ({ isOpen, onAccept, onCancel }) => {
  return (
    <div className={styles.mask} aria-hidden={!isOpen}>
      <div className={styles.wrapper}>
        <div className={styles.modalContainer}>
          <h2 className={styles.modalTitle}>Confirmar respuestas</h2>
          <p>Estás a punto de embarcarte en una aventura mágica de descubrimiento personal (y de libros). Recuerda que siempre puedes volver a rellenar el cuestionario.</p>
          <p>¿Se te ha quedado algo en el tintero? ¡Siempre puedes consultar y editar lo que has respondido para obtener las mejores recomendaciones para tu lectura!</p>
          <div className={styles.buttonContainer}>
            <Button className={styles.button} variant='secondary' action={onCancel}>
              Editar respuestas
            </Button>
            <Button className={styles.button} variant='primary' action={onAccept}>
              ¡Recomiéndame libros!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;


