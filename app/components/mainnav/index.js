'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../../styles/Nav.module.scss';
import { navItems } from '../../../utils/routes';

// const dataList=transform(data);

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
