import '../globals.scss';
import styles from '../../styles/Contact.module.scss';
import Link from 'next/link';
import BurgerMenu from '../components/burgerMenu/index';
import { getBoardsRequest } from '@utils/requestsDatas';

const PrimaryLayout = async ({ children }) => {
  // // API calls on page loading : loading boards (Server Side Component)
  // https://nextjs.org/docs/app/building-your-application/data-fetching/fetching
  const { data } = await getBoardsRequest();

  return (
    <>
      <header role='banner' className='burgermenu'>
        <p className='logo'>
          <Link href='/' title="retour vers la page d'accueil">
            MEMOMO
          </Link>
        </p>
        <BurgerMenu boards={data} />
      </header>
      <main className='main'> {children}</main>
    </>
  );
};

export default PrimaryLayout;
