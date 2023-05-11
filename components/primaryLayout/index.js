import Head from 'next/head';
import Nav from '../nav/index';
import styles from '@styles/PrimaryLayout.module.scss';
import { useState, useEffect } from 'react';
import { getBoardsRequest } from '../../requests/boards';

const PrimaryLayout = ({ children }) => {
  const [boardsList, setBoardsList] = useState(null);

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
          {children}
        </main>
      </div>
    </>
  );
};

export default PrimaryLayout;
