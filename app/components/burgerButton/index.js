'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import BurgerMenuExpanded from '../burgerMenuExpanded/index';
import styles from '../../../styles/BurgerMenu.module.scss';

export default function BurgerButton({ boards }) {
  const [menuExpanded, setMenuExpanded] = useState(null);

  //To handle focus management
  const burgerButtonRef = useRef(null);

  useEffect(() => {
    if (menuExpanded === false) {
      burgerButtonRef.current.focus();
    }
  }, [menuExpanded]);

  const handleClick = (e) => {
    setMenuExpanded((prev) => {
      return !prev;
    });
  };

  const handleKeyPress = (event) => {
    // To close burger menu if escape is pressed - according to ARIA pattern
    if (event.key === 'Escape') {
      setMenuExpanded((prev) => {
        return false;
      });
    }
  };

  return (
    <nav
      className={styles.burgernav}
      role='navigation'
      aria-label='navigation principale'
      onKeyDown={(e) => handleKeyPress(e)}
    >
      {!menuExpanded ? (
        <button
          id='hamburger'
          role='button'
          aria-label='Cliquer pour voir le menu de navigation'
          onClick={handleClick}
          ref={burgerButtonRef}
        >
          &#9776;
        </button>
      ) : (
        <BurgerMenuExpanded
          boards={boards}
          handleClick={handleClick}
          menuExpanded={menuExpanded}
        />
      )}
    </nav>
  );
}
