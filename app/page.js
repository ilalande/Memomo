import './globals.scss';
import BurgerMenu from './components/burgerMenu/index';
import AddBoard from './components/addBoard';
import { getBoardsRequest } from '../utils/requestsDatas';

export default async function Home() {
  let resBoards;
  let boardsList;
  resBoards = await getBoardsRequest();
  boardsList = resBoards.data;

  return (
    <>
      <div className='burgermenu'>
        <BurgerMenu boards={boardsList} />
      </div>
      {!boardsList ? (
        <main className='main' role='main'>
          <h2>Problème de chargement du serveur</h2>
        </main>
      ) : null}
      {boardsList ? (
        <main className='main' role='main'>
          <h1 className='logoHome'>MEMOMO</h1>
          <p>Créez votre tableau</p>
          <AddBoard boardsList={boardsList} />
        </main>
      ) : null}
    </>
  );
}
