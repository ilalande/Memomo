import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import styles from '@styles/Home.module.css';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [boardNameEntered, setboardNameEntered] = useState(['']);
  const createBoard = (e) => {
    setboardNameEntered(e.target.value);
  };
  console.log(boardNameEntered);
  return (
    <>
      <Head>
        <title>MEMOMO </title>
        <meta
          name='description'
          content='Création de tableaux personnels contenant des listes'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <h1 id='logo' className={styles.logoHome}>
          MEMOMO
        </h1>
        <p>Créez votre tableau</p>

        <input
          type='text'
          id='boardName'
          className={styles.boardNameEnter}
          onBlur={createBoard}
        />
        <Link
          href={`/${boardNameEntered}`}
          className={`plusButton ${styles.plusButtonHome}`}
        >
          &nbsp; + &nbsp;
        </Link>
      </main>
    </>
  );
}
