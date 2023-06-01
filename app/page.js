import './globals.scss';
import AddBoard from './components/addBoard';
import { getBoardsRequest } from '../lib/requestsDatas';

export default async function Home() {
  let resBoards;
  let boardsList;
  try {
    resBoards = await getBoardsRequest();
    boardsList = resBoards.data;
  } catch (error) {
    console.error(error);
  }
  return (
    <>
      <main className='main'>
        <h1 className='logoHome'>MEMOMO</h1>
        <p>Créez votre tableau</p>
        <AddBoard boardsList={boardsList} />
      </main>
    </>
  );
}
