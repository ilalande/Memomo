'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '../../../styles/BurgerMenu.module.scss';
import { navItems } from '../../../utils/routes';

export default function BurgerMenu({ boards }) {
  const [isExpanded, setIsExpanded] = useState(false);
  let pathname = usePathname() || '/';

  useEffect(() => {
    setIsExpanded(false);
  }, [pathname]);

  // useEffect(() => {
  //   //Way to handle escape button to close menu found here :
  //   //  https://dev.to/harshhhdev/building-an-animated-and-accessible-command-menu-in-react-5daj
  //   window.addEventListener('keydown', navigation);
  //   return () => window.removeEventListener('keydown', navigation);
  // }, [navigation]);

  const handleClick = (e) => {
    // if (e.keyCode === 27) {
    //   console.log('Close');
    // }
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
            onClick={(e) => handleClick(e)}
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
    </nav>
  );
}
