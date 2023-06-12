'use client';
import { useEffect, useState } from 'react';
import styles from '../../../styles/Dialog.module.scss';

export default function Dialog({ setFormSentOk }) {
  return (
    <>
      <dialog open className={styles.dialog}>
        <button
          onClick={() => {
            return setFormSentOk((prev) => {
              return false;
            });
          }}
        >
          X
        </button>
        <h2>Message validé</h2>
        <p>
          Votre message a été envoyé NB : SMTP not implemented so doesn't work
        </p>
      </dialog>
    </>
  );
}
