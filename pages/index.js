import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '@styles/Home.module.css';
import { getBoardsRequest, addBoardsRequest } from '../requests/boards';
import Nav from '../components/nav/index';
export default function Home() {
  const [boardNameEntered, setboardNameEntered] = useState(['']);
  const [boardsList, setBoardsList] = useState(null);

  const saveBoardName = (e) => {
    setboardNameEntered(e.target.value);
  };
  // function for API calls
  const getBoards = async () => {
    try {
      const { data } = await getBoardsRequest();
      setBoardsList(data);
    } catch (error) {
      throw error;
    }
  };

  // API calls on page loading : loading boards
  useEffect(() => {
    getBoards();
  }, []);
  useEffect(() => {
    console.log(boardsList);
  }, [boardsList]);
  const addBoard = async () => {
    let existingBoardEntered = false;

    // if a board with boardNameEntered exists, nothing happens (just the link).
    //if no existing board is found, one is created in database
    //if an existing board exists, the function does nothing, only lik is applied
    if (boardsList) {
      boardsList.map((board) => {
        if (boardNameEntered === board.board_name) {
          existingBoardEntered = true;

          return;
        }
      });
      if (!existingBoardEntered) {
        const body = { boardName: boardNameEntered };
        const res = await addBoardsRequest(body);
      }
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
      <div className={styles.mainWrapper}>
        <Nav boards={boardsList} />
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
      </div>
    </>
  );
}
