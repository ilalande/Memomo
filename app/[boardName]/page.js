import styles from '@styles/Board.module.scss';
import {
  getBoardsRequest,
  getBoardByNameRequest,
  getMemosByBoardId,
  deleteMemoRequest,
} from '../../lib/requestsDatas';
import MemoCard from '../../components/memoCard';
import PlusMemoButton from '../../components/plusMemoButton/index';

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

  // API call in Server Side Component
  const resboardDatas = await getBoardByNameRequest(boardName);
  const boardDatas = resboardDatas.data[0];
  const resMemosFromBoard = await getMemosByBoardId(boardDatas.id);
  const memosDatas = resMemosFromBoard.data;

  // Function to delete memos
  const deleteMemo = async (id) => {
    await deleteMemoRequest(id);
    await getMemosDatas(boardDatas.id);
  };

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
          <div className={styles.memosList}>
            {memosDatas ? (
              memosDatas.map((memo) => {
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
              })
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
