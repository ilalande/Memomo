'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import styles from '../../../styles/BurgerMenu.module.scss';
import { navItems } from '../../../utils/routes';

export default function BurgerMenuExpanded({
  boards,
  handleClick,
  menuExpanded,
}) {
  //To handle focus management
  const closeButtonRef = useRef(null);
  useEffect(() => {
    if (menuExpanded) {
      closeButtonRef.current.focus();
    }
  }, [menuExpanded]);
  let pathname = usePathname() || '/';

  return (
    <div className={styles.burgerOpen}>
      <div>
        <button
          role='button'
          aria-label='cacher le menu de navigation'
          onClick={(e) => handleClick(e)}
          aria-expanded='true'
          ref={closeButtonRef}
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
                {item.name}
              </Link>
            </li>
          );
        })}
        <li role='listitem'>
          <span>
            <Image
              src='/board.svg'
              width={25}
              height={25}
              alt=''
              aria-hidden='true'
            />
            Boards :
          </span>
          <ul role='list'>
            {boards ? (
              boards.map((board) => {
                return (
                  <li
                    className={
                      pathname === `/${board.board_name}`
                        ? styles.activeLink
                        : null
                    }
                    key={board.id}
                    role='listitem'
                  >
                    <Link href={`/${board.board_name}`}>
                      &#8594; {board.board_name}
                    </Link>
                  </li>
                );
              })
            ) : (
              <></>
            )}
          </ul>
        </li>
      </ul>
    </div>
  );
}
