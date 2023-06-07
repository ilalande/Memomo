import Link from 'next/link';
import Image from 'next/image';
import styles from '../../../styles/BoardNav.module.scss';
import { getBoardsRequest } from 'lib/requestsDatas';

// const dataList=transform(data);

export default async function BoardNav() {
  // // API calls on page loading : loading boards (Server Side Component)
  // https://nextjs.org/docs/app/building-your-application/data-fetching/fetching
  const { data } = await getBoardsRequest();
  return (
    <nav
      className={styles.nav}
      role='navigation'
      aria-label='Accès aux tableaux existants'
    >
      <ul role='list'>
        {data ? (
          data.map((board) => {
            return (
              <li className={styles.boardLink} key={board.id} role='listitem'>
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
