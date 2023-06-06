import Link from 'next/link';
import Image from 'next/image';
import styles from '../../../styles/Nav.module.scss';
import { getBoardsRequest } from 'lib/requestsDatas';

// const dataList=transform(data);

export default async function Nav() {
  // // API calls on page loading : loading boards (Server Side Component)
  // https://nextjs.org/docs/app/building-your-application/data-fetching/fetching
  const { data } = await getBoardsRequest();
  return (
    <nav className={styles.nav} role='navigation'>
      <ul role='list'>
        <li className={styles.generalLink} role='listitem'>
          <Link href='/'>
            {/* To improve ecoconception, use UTF-8 symbols instead. Used like that to apply accessibility concepts
            https://www.w3schools.com/charsets/ref_utf_symbols.asp */}
            <Image
              src='/home.svg'
              width={25}
              height={25}
              alt=''
              aria-hidden='true'
            />
            <span>Home</span>
          </Link>
        </li>
        <li className={styles.generalLink} role='listitem'>
          <Link href='/about'>
            <Image
              src='/help-circle.svg'
              width={25}
              height={25}
              alt=''
              aria-hidden='true'
            />
            <span>A propos</span>
          </Link>
        </li>
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
