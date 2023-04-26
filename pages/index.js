import Head from 'next/head';
import Image from 'next/image';
import styles from '@styles/Home.module.css';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
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
        <h1 id='logo'>MEMOMO</h1>
        <p>Créez votre tableau</p>

        <input type='text' id='boardName' className={styles.boardNameEnter} />
        <button type='button' className={styles.plusButton}>
          +
        </button>
      </main>
    </>
  );
}
