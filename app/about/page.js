import Link from 'next/link';
import '../globals.scss';
import BurgerMenu from '../components/burgerMenu/index';
import { getBoardsRequest } from '../../utils/requestsDatas';

export default async function About() {
  const { data } = await getBoardsRequest();

  return (
    <>
      <header role='banner' className='burgermenu'>
        <p className='logo'>
          {' '}
          <Link href='/' title="retour vers la page d'accueil">
            MEMOMO
          </Link>
        </p>
        <BurgerMenu boards={data} />
      </header>
      <main className='main'>
        <h1>A propos</h1>
        <p>blabla</p>
      </main>
    </>
  );
}
