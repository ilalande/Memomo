import './globals.scss';
import AddBoard from './components/addBoard';
import { getBoardsRequest } from '../lib/requestsDatas';

export default async function Home() {
  let resBoards;
  let boardsList;
  resBoards = await getBoardsRequest();
  boardsList = resBoards.data;

  return (
    <>
      {!boardsList ? (
        <main className='main'>
          <h2>Problème de chargement du serveur</h2>
        </main>
      ) : null}
      {boardsList ? (
        <main className='main'>
          <h1 className='logoHome'>MEMOMO</h1>
          <p>Créez votre tableau</p>
          <AddBoard boardsList={boardsList} />
        </main>
      ) : null}
    </>
  );
}
