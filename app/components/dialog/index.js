'use client';
import { useRef, useEffect } from 'react';
import styles from '../../../styles/Dialog.module.scss';

export default function Dialog({ setFormSentOk }) {
  //To handle focus management
  const closeDialogButtonRef = useRef(null);

  useEffect(() => {
    closeDialogButtonRef.current.focus();
  }, []);

  // To close burger menu if escape is pressed - according to ARIA pattern
  const handleKeyPress = (event) => {
    if (event.key === 'Escape') {
      setFormSentOk((prev) => {
        return false;
      });
    }
  };

  return (
    <>
      <dialog
        role='dialog'
        open
        className={styles.dialog}
        aria-modal='true'
        aria-labelledby='dialogTitle'
        onKeyDown={(e) => handleKeyPress(e)}
      >
        <button
          ref={closeDialogButtonRef}
          type='button'
          role='button'
          title='fermer la fenêtre'
          onClick={() => {
            return setFormSentOk((prev) => {
              return false;
            });
          }}
        >
          X
        </button>
        <h2 id='dialogTitle'>Message bien envoyé</h2>
        <p>
          Votre message a été envoyé NB : SMTP not implemented so doesn't work
        </p>
      </dialog>
    </>
  );
}
