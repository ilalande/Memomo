import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import styles from '@styles/Home.module.css';
import { getBoardsRequest, addBoardsRequest } from '../requests/boards';

export default function Home() {
  const [boardNameEntered, setboardNameEntered] = useState(['']);
  const saveBoardName = (e) => {
    setboardNameEntered(e.target.value);
  };

  const addBoard = async () => {
    try {
      const boards = await getBoardsRequest();
      let existingBoard = false;
      if (boards) {
        const dataBoardsFromApi = boards.data;
        dataBoardsFromApi.map((board) => {
          if (boardNameEntered === board.board_name) {
            existingBoard = true;
          }
        });
        if (!existingBoard) {
          console.log('bloup');
          const body = { boardName: boardNameEntered };
          addBoardsRequest(body);
        }
      }
    } catch (error) {
      return console.log(error);
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
