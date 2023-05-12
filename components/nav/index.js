import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Nav.module.scss';
import { getBoardsRequest } from 'lib/requestsDatas';

// const dataList=transform(data);

export default async function Nav() {
  // // API calls on page loading : loading boards (Server Side Component)
  // https://nextjs.org/docs/app/building-your-application/data-fetching/fetching
  const { data } = await getBoardsRequest();
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.generalLink}>
          <Link href='/'>
            <Image
              src='/home.svg'
              width={25}
              height={25}
              alt="retour à la page d'accueil"
            />
            <span>Home</span>
          </Link>
        </li>
        <li className={styles.generalLink}>
          <Link href='/about'>
            <Image
              src='/help-circle.svg'
              width={25}
              height={25}
              alt='Lien vers la rubrique à propos'
            />
            <span>A propos</span>
          </Link>
        </li>
        {data ? (
          data.map((board) => {
            return (
              <li className={styles.boardLink} key={board.id}>
                <Link href={`/${board.board_name}`}>
                  <Image
                    src='/bookmark.svg'
                    width={25}
                    height={25}
                    alt='Lien vers la rubrique à propos'
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
