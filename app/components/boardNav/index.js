'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import styles from '../../../styles/BoardNav.module.scss';
import { getBoardsRequest } from '@utils/requestsDatas';

// const dataList=transform(data);

export default function BoardNav({ boards }) {
  let pathname = usePathname() || '/';

  return (
    <nav
      className={styles.boardnav}
      role='navigation'
      aria-label='Accès aux tableaux existants'
    >
      <ul role='list'>
        {boards ? (
          boards.map((board) => {
            return (
              <li
                className={
                  pathname === `/${board.board_name}` ? styles.activeLink : null
                }
                key={board.id}
                role='listitem'
              >
                <Link href={`/${board.board_name}`}>
                  <Image
                    src='/bookmark.svg'
                    width={25}
                    height={25}
                    alt=''
                    aria-hidden='true'
                  />
                  <span>{board.board_name}</span>
                </Link>
              </li>
            );
          })
        ) : (
          <></>
        )}
      </ul>
    </nav>
  );
}
