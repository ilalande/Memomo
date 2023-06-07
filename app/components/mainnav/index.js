'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../../styles/Nav.module.scss';
import { useEffect } from 'react';

// const dataList=transform(data);

const navItems = [
  {
    name: 'Home',
    image: '/home.svg',
    path: '/',
    id: 0,
  },
  {
    name: 'A propos',
    image: '/help-circle.svg',
    path: '/about',
    id: 1,
  },
  {
    name: 'Acessibilité',
    path: '/accessibilite',
    image: '/user.svg',
    id: 2,
  },
  {
    name: 'Mentions légales',
    path: '/mentionslegales',
    image: '/info.svg',
    id: 3,
  },
];

export default function MainNav() {
  let pathname = usePathname() || '/';

  // // API calls on page loading : loading boards (Server Side Component)
  // https://nextjs.org/docs/app/building-your-application/data-fetching/fetching

  return (
    <nav className={styles.nav} role='navigation'>
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
    </nav>
  );
}
