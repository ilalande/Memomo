import { useRouter } from 'next/router';
import styles from '@styles/Board.module.css';
import { useEffect, useState } from 'react';
import { getBoardByNameRequest } from '../requests/boards';
import { getMemosByBoardId } from '../requests/memos';
import MemoCard from '../components/memoCard';

export default function Board() {
  const router = useRouter();
  const { boardName } = router.query;
  const [boardDatas, setBoardDatas] = useState(null);
  const [memosDatas, setMemosDatas] = useState(null);

  // function for API calls
  const getBoardDatas = async (name) => {
    const { data } = await getBoardByNameRequest(name);
    return data[0];
  };

  const getMemosDatas = async (id) => {
    const { data } = await getMemosByBoardId(id);
    return data;
  };

  // API calls on page loading : charging board name and id and memos existing in the board
  useEffect(() => {
    getBoardDatas(boardName).then((data) => {
      setBoardDatas(data);
    });
  }, [boardName]);

  useEffect(() => {
    if (boardDatas) {
      getMemosDatas(boardDatas.id).then((data) => {
        setMemosDatas(data);
      });
    }
  }, [boardDatas]);

  useEffect(() => {
    console.log(memosDatas);
  }, [memosDatas]);

  return (
    <>
      <div className={styles.boardHeader}>
        <header>
          <h1>{boardName}</h1>
          <div className={styles.plusButtonOnBoard}>
            <button
              type='text'
              alt='Créez un nouveau mémo rose'
              className={`plusButton  ${styles.addMemo1}`}
            >
              &nbsp; + &nbsp;
            </button>
          </div>
          <div className={styles.plusButtonOnBoard}>
            <button
              type='text'
              alt='Créez un nouveau mémo rose'
              className={`plusButton  ${styles.addMemo2}`}
            >
              &nbsp; + &nbsp;
            </button>
          </div>
          <div className={styles.plusButtonOnBoard}>
            <button
              type='text'
              alt='Créez un nouveau mémo rose'
              className={`plusButton  ${styles.addMemo3}`}
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
                  content={memo.memo_content}
                  colour={memo.memo_colour_id}
                />
              );
            })
          ) : (
            <>
              <p>loupé</p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
