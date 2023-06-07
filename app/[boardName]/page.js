import styles from '@styles/Board.module.scss';
import {
  getBoardsRequest,
  getBoardByNameRequest,
  getMemosByBoardId,
} from '../../lib/requestsDatas';
import MemoCard from '../components/memoCard';
import PlusMemoButton from '../components/plusMemoButton/index';
import Link from 'next/link';

// to statically generate routes at build time instead of on-demand at request time.
// from https://nextjs.org/docs/app/api-reference/functions/generate-static-params
export async function generateStaticParams() {
  const { data } = await getBoardsRequest();
  return data.map((board) => ({
    boardName: board.board_name,
  }));
}

// Expend metadatas from layout
export const metadata = {
  title: `Mon tableau`,
  description: 'Mon tableau de mémos',
};

export default async function Board({ params }) {
  const { boardName } = params;
  let memosDatas;
  let boardDatas;
  // API call in Server Side Component
  try {
    const resboardDatas = await getBoardByNameRequest(boardName);
    boardDatas = resboardDatas.data[0];
    const resMemosFromBoard = await getMemosByBoardId(boardDatas.id);
    memosDatas = resMemosFromBoard.data;
  } catch (error) {
    console.error(error);
  }

  // Function to delete memos
  // const deleteMemo = async (id) => {
  //   await deleteMemoRequest(id);
  //   await getMemosDatas(boardDatas.id);
  // };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.boardHeader}>
          <nav role='navigation' aria-label='Accès rapide' className='sr-only'>
            <Link href={`${boardName}#main`}>Contenu principal</Link>
          </nav>
          <header role='banner'>
            <h1>{boardName}</h1>
            <PlusMemoButton boardDatas={boardDatas} colorId='1' />
            <PlusMemoButton boardDatas={boardDatas} colorId='2' />
            <PlusMemoButton boardDatas={boardDatas} colorId='3' />
          </header>
        </div>
        <div className={styles.boardarea}>
          {memosDatas ? (
            <main id='main' role='main' className={styles.boardarea}>
              <div className={styles.memosList}>
                {memosDatas.map((memo) => {
                  return (
                    <MemoCard
                      key={memo.id}
                      id={memo.id}
                      boardId={memo.memo_board_id}
                      content={memo.memo_content}
                      colour={memo.memo_colour_id}
                      // deleteMemo={deleteMemo}
                    />
                  );
                })}
              </div>
            </main>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
