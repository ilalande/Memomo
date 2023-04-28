import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import styles from '@styles/Home.module.css';
import { getBoardsFromApi } from '../requests/boards';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [boardNameEntered, setboardNameEntered] = useState(['']);
  const saveBoardName = (e) => {
    setboardNameEntered(e.target.value);
  };

  const addBoard = async () => {
    try {
      const boards = await getBoardsFromApi();
      if (boards) {
        const dataBoardsFromApi = boards.data;
        console.log(dataBoardsFromApi);
      }
    } catch (error) {
      return console.log(error.response.data.message);
    }
  };

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
          onBlur={saveBoardName}
        />
        <Link
          href={`/${boardNameEntered}`}
          className={`plusButton ${styles.plusButtonHome}`}
          onClick={addBoard}
        >
          &nbsp; + &nbsp;
        </Link>
      </main>
    </>
  );
}
