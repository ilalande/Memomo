import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Nav.module.css';

export default function Nav({ boards }) {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
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
        <li className={styles.aboutLink}>
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
        {boards ? (
          boards.map((board) => {
            return (
              <li className={styles.boardLink}>
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
