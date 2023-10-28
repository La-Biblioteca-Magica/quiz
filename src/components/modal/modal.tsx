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
        isOpen ? (
            <div className={styles.wrapper}>
                <div className={styles.modalContainer}>
                    <h2 className={styles.modalTitle}>
                        Estas seguro que quieres continuar?
                    </h2>
                    <div className={styles.buttonContainer}>
                        <Button className={styles.button} variant='primary' action={onAccept}>
                            Continua!
                        </Button>
                        <Button className={styles.button} variant={'secondary'} action={onCancel}>
                            Dejame editar mis respuestas
                        </Button>
                    </div>
                </div>
            </div>
        ) : null
    );
}

export default Modal;


