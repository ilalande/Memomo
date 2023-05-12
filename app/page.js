import './globals.scss';
import AddBoard from '../components/addBoard';
import { getBoardsRequest } from '../lib/requestsDatas';

export default async function Home() {
  const resBoards = await getBoardsRequest();
  const boardsList = resBoards.data;

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
