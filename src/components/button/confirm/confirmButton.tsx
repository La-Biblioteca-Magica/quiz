import { useState } from 'react';
import styles from './ConfirmButton.module.scss'; // Importando los estilos
import Button from '../button';

const ConfirmButton = () => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div>
            <Button action={() => setShowPopup(true)}>Haga clic para confirmar</Button>

            {showPopup ? (
                <div className={styles.modalContainer}>
                    <h2 className={styles.modalTitle}>
                        May your life be filled with success and achievements. Congratulations!
                    </h2>
                    <button
                        className={styles.modalButton}
                        onClick={() => setShowPopup(false)}
                    >
                        Close
                    </button>
                </div>
            ) : null
            }</div>
    );
}

export default ConfirmButton;
