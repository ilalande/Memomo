import styles from '@styles/Board.module.scss';
import {
  getBoardsRequest,
  getBoardByNameRequest,
  getMemosByBoardId,
} from '../../lib/requestsDatas';
import BoardArea from '../components/boardArea';
import PlusMemoButton from '../components/plusMemoButton/index';

// to statically generate routes at build time instead of on-demand at request time.
// from https://nextjs.org/docs/app/api-reference/functions/generate-static-params
export async function generateStaticParams() {
  const { data } = await getBoardsRequest();
  return data.map((board) => ({
    boardName: board.board_name,
  }));
}

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

  return (
    <>
      <div className={styles.main}>
        <div className={styles.boardHeader}>
          <header>
            <h1>{boardName}</h1>
            <PlusMemoButton boardDatas={boardDatas} colorId='1' />
            <PlusMemoButton boardDatas={boardDatas} colorId='2' />
            <PlusMemoButton boardDatas={boardDatas} colorId='3' />
          </header>
        </div>
        <div className={styles.boardarea}>
          {memosDatas ? (
            <div className={styles.boardarea}>
              <BoardArea memosDatas={memosDatas} />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
