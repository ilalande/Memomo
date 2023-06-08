'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../../../styles/BurgerMenu.module.scss';
import { navItems } from '../../../utils/routes';

export default function BurgerMenu() {
  const [isExpanded, setIsExpanded] = useState(false);
  let pathname = usePathname() || '/';

  const handleClick = () => {
    console.log('bip');
    setIsExpanded((prev) => {
      return !prev;
    });
  };

  return (
    <nav
      className={styles.burgernav}
      role='navigation'
      aria-label='navigation principale'
    >
      <button
        id='hamburger'
        aria-label='Cliquer pour voir le menu'
        aria-expanded='false'
        onClick={handleClick}
        className={!isExpanded ? '' : styles.burgerHidden}
      >
        &#9776;
      </button>

      <div className={isExpanded ? styles.burgerOpen : styles.burgerHidden}>
        <div>
          <button
            aria-label='cacher le menu de navigation'
            onClick={handleClick}
            aria-expanded='true'
          >
            ×
          </button>
        </div>
        <ul role='list'>
          {navItems.map((item) => {
            return (
              <li
                role='listitem'
                key={item.id}
                className={pathname === item.path ? styles.activeLink : null}
              >
                <Link href={item.path}>
                  {item.image ? (
                    // svg image - solution from https://github.com/vercel/next.js/discussions/20993
                    <Image
                      src={item.image}
                      width={25}
                      height={25}
                      alt=''
                      aria-hidden='true'
                    />
                  ) : null}
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
