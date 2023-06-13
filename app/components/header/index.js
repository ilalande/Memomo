import '../../globals.scss';
import Link from 'next/link';
import BurgerButton from '../burgerButton/index';
import PlusMemoButton from '../plusMemoButton/index';
import { getBoardsRequest } from '@utils/requestsDatas';
const Header = async ({ pageType, boardDatas }) => {
  // // API calls on page loading : loading boards (Server Side Component)
  // https://nextjs.org/docs/app/building-your-application/data-fetching/fetching
  const { data } = await getBoardsRequest();
  return (
    <>
      <header role='banner'>
        {pageType === 'static' ? (
          <>
            <p className='logo'>
              <Link href='/' title="retour vers la page d'accueil">
                MEMOMO
              </Link>
            </p>
            <BurgerButton boards={data} />
          </>
        ) : pageType === 'board' ? (
          <>
            <h1>{boardDatas.board_name}</h1>
            <PlusMemoButton boardDatas={boardDatas} colorId='1' />
            <PlusMemoButton boardDatas={boardDatas} colorId='2' />
            <PlusMemoButton boardDatas={boardDatas} colorId='3' />
            <BurgerButton boards={data} />
          </>
        ) : (
          <>
            <BurgerButton boards={data} />
          </>
        )}
      </header>
    </>
  );
};
export default Header;
