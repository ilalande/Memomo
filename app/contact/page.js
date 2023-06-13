'use client';

import { useRef, useState, useEffect } from 'react';
import '../globals.scss';
import styles from '../../styles/Contact.module.scss';
import Dialog from '../components/dialog/index';
import FocusLock from 'react-focus-lock';

export default function Contact() {
  const [error, setError] = useState(null);
  const [formSentOk, setFormSentOk] = useState(null);
  const [formData, setFormData] = useState({
    surname: '',
    email: '',
    message: '',
  });
  // To handle focus and make form accessible
  const surnameRef = useRef(null);
  const messageRef = useRef(null);
  const emailRef = useRef(null);

  //To handle focus management when dialog is closed (focus on send button)
  const sendButtonRef = useRef(null);

  useEffect(() => {
    if (formSentOk === false) {
      sendButtonRef.current.focus();
    }
  }, [formSentOk]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendMail = (e) => {
    setError((prev) => {
      return null;
    });
    e.preventDefault();
    if (formData.surname === '') {
      setError((prev) => {
        return {
          ...prev,
          errorSurname: "Veuillez entrer votre nom s'il vous plait",
        };
      });
      surnameRef.current.focus();
      return;
    }

    if (formData.email === '') {
      setError((prev) => {
        return {
          ...prev,
          errorEmail:
            "Veuillez entrer votre email (sous la forme nom@domaine.fr) s'il vous plait",
        };
      });
      emailRef.current.focus();
      return;
    }
    if (formData.message === '') {
      setError((prev) => {
        return {
          ...prev,
          errorMessage: "Veuillez entrer un message s'il vous plait",
        };
      });
      messageRef.current.focus();
      return;
    }

    setFormSentOk((prev) => {
      return true;
    });
    setFormData((prev) => {
      return {
        surname: '',
        email: '',
        message: '',
      };
    });
  };

  return (
    <>
      {formSentOk ? (
        <FocusLock>
          <div className={styles.modalOverlay}>
            <Dialog setFormSentOk={setFormSentOk} />
          </div>
        </FocusLock>
      ) : (
        <>
          <h1>Contact</h1>
          <p className={`${styles.formGenHelp}  ${error ? 'error' : ''}`}>
            Tous les champs sont obligatoires
          </p>
          <p className={styles.formGenHelp}>
            Ce formulaire ne fonctionne pas (n'envoie pas de mail)
          </p>
          <div className={styles.contactForm}>
            <form id='contactForm' onSubmit={(e) => sendMail(e)}>
              <p>
                <label htmlFor='name' className={styles.formLabelTitle}>
                  Nom
                </label>
                <input
                  type='text'
                  id='name'
                  aria-required='true'
                  // aria-describedby='helpEmail'
                  autoComplete='name'
                  value={formData.surname}
                  onChange={handleChange}
                  name='surname'
                  ref={surnameRef}
                />
              </p>
              {error ? (
                <p className='error' id='error'>
                  {error.errorSurname}
                </p>
              ) : null}
              <p>
                <label htmlFor='email'>
                  <span className={styles.formLabelTitle}>Email</span>
                  <span id='helpEmail' className={styles.formLabelHelp}>
                    Format attendu : nom@domaine.fr
                  </span>
                </label>
                <input
                  type='email'
                  id='email'
                  aria-required='true'
                  aria-describedby='helpEmail'
                  autoComplete='email'
                  value={formData.email}
                  onChange={handleChange}
                  name='email'
                  ref={emailRef}
                />
              </p>
              {error ? (
                <p className='error' id='error'>
                  {error.errorEmail}
                </p>
              ) : null}
              <p>
                <label htmlFor='message' className={styles.formLabelTitle}>
                  Votre message
                </label>
                <textarea
                  id='message'
                  aria-required='true'
                  value={formData.message}
                  onChange={handleChange}
                  name='message'
                  ref={messageRef}
                ></textarea>
              </p>
              {error ? (
                <p className='error' id='error'>
                  {error.errorMessage}
                </p>
              ) : null}
              <button
                title='Envoyer le message par mail'
                onClick={(e) => sendMail(e)}
                ref={sendButtonRef}
              >
                Envoyer (not working)
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
}
