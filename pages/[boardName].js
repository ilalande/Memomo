import { useRouter } from 'next/router';
import styles from '@styles/Board.module.css';

export default function Board() {
  const router = useRouter();
  const { boardName } = router.query;
  return (
    <div className={styles.boardHeader}>
      <header>
        <h1>{boardName}</h1>
        <div className={styles.plusButtonOnBoard}>
          <button
            type='text'
            alt='Créez un nouveau mémo rose'
            className={`plusButton  ${styles.memo1}`}
          >
            &nbsp; + &nbsp;
          </button>
        </div>
        <div className={styles.plusButtonOnBoard}>
          <button
            type='text'
            alt='Créez un nouveau mémo rose'
            className={`plusButton  ${styles.memo2}`}
          >
            &nbsp; + &nbsp;
          </button>
        </div>
        <div className={styles.plusButtonOnBoard}>
          <button
            type='text'
            alt='Créez un nouveau mémo rose'
            className={`plusButton  ${styles.memo3}`}
          >
            &nbsp; + &nbsp;
          </button>
        </div>
      </header>
    </div>
  );
}
