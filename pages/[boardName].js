import { useRouter } from 'next/router';
import styles from '@styles/Board.module.css';
import { useEffect, useState } from 'react';
import { getBoardByNameRequest } from '../requests/boards';
import {
  getMemosByBoardId,
  addMemoRequest,
  deleteMemoRequest,
} from '../requests/memos';
import MemoCard from '../components/memoCard';

export default function Board() {
  const router = useRouter();
  const { boardName } = router.query;
  const [boardDatas, setBoardDatas] = useState(null);
  const [memosDatas, setMemosDatas] = useState(null);

  // function for API calls
  const getBoardDatas = async (name) => {
    const { data } = await getBoardByNameRequest(name);
    setBoardDatas(data[0]);
  };

  const getMemosDatas = async (id) => {
    const { data } = await getMemosByBoardId(id);
    setMemosDatas(data);
  };

  // API calls on page loading :loading board name and id and memos existing in the board
  useEffect(() => {
    getBoardDatas(boardName);
  }, [boardName]);

  useEffect(() => {
    if (boardDatas) {
      getMemosDatas(boardDatas.id);
    }
  }, [boardDatas]);

  // Function to add memos
  const addMemo = (colourId) => {
    const body = {
      colour: colourId,
      content: '',
      board: boardDatas.id,
    };
    addMemoRequest(body).then(() => {
      getMemosDatas(boardDatas.id);
    });
  };
  // Function to delete memos
  const deleteMemo = (id) => {
    deleteMemoRequest(id).then(() => {
      getMemosDatas(boardDatas.id);
    });
  };

  return (
    <>
      <div className={styles.boardHeader}>
        <header>
          <h1>{boardName}</h1>
          <div className={styles.plusButtonOnBoard}>
            <button
              type='text'
              alt='Créez un nouveau mémo rose '
              className={`plusButton  ${styles.addMemo2}`}
              onClick={() => {
                addMemo(2);
              }}
            >
              &nbsp; + &nbsp;
            </button>
          </div>
          <div className={styles.plusButtonOnBoard}>
            <button
              type='text'
              alt='Créez un nouveau mémo vert'
              className={`plusButton  ${styles.addMemo1}`}
              onClick={() => {
                addMemo(1);
              }}
            >
              &nbsp; + &nbsp;
            </button>
          </div>
          <div className={styles.plusButtonOnBoard}>
            <button
              type='text'
              alt='Créez un nouveau mémo rose'
              className={`plusButton  ${styles.addMemo3}`}
              onClick={() => {
                addMemo(3);
              }}
            >
              &nbsp; + &nbsp;
            </button>
          </div>
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
                  deleteMemo={deleteMemo}
                />
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
