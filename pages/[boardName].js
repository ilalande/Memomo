import { useRouter } from 'next/router';
import styles from '@styles/Board.module.css';
import { useEffect, useState } from 'react';
import { getBoardByNameRequest } from '../requests/boards';
import { getMemosByBoardName } from '../requests/memos';
import MemoCard from '../components/memoCard';

export default function Board() {
  const router = useRouter();
  const { boardName } = router.query;

  const [boardDatas, setBoardDatas] = useState(null);

  const getBoardDatas = async (name) => {
    const { data } = await getMemosByBoardName(name);
    return data;
  };

  // const getMemosDatas = async () => {
  //   const { id } = boardDatas;
  //   const { data } = await getMemosByBoardId(id);
  //   console.log(data);
  //   setMemos(data);
  // };

  useEffect(() => {
    getBoardDatas(boardName).then((data) => {
      setBoardDatas(data);
    });
  }, []);

  useEffect(() => {
    console.log(boardDatas);
  }, [boardDatas]);

  return (
    <>
      <div className={styles.boardHeader}>
        <header>
          <h1>{boardName}</h1>
          <div className={styles.plusButtonOnBoard}>
            <button
              type='text'
              alt='Créez un nouveau mémo rose'
              className={`plusButton  ${styles.memo1}`}
            >
              &nbsp; + &nbsp;
            </button>
          </div>
          <div className={styles.plusButtonOnBoard}>
            <button
              type='text'
              alt='Créez un nouveau mémo rose'
              className={`plusButton  ${styles.memo2}`}
            >
              &nbsp; + &nbsp;
            </button>
          </div>
          <div className={styles.plusButtonOnBoard}>
            <button
              type='text'
              alt='Créez un nouveau mémo rose'
              className={`plusButton  ${styles.memo3}`}
            >
              &nbsp; + &nbsp;
            </button>
          </div>
        </header>
      </div>
      <div className={styles.memosList}>
        <p>bloup</p>bip
        {boardDatas ? (
          boardDatas.map((memo) => {
            return (
              <MemoCard
                key={memo.id}
                id={memo.id}
                content={memo.memo_content}
                colour={memo.colour_name}
              />
            );
          })
        ) : (
          <>
            <p>loupé</p>
          </>
        )}
      </div>
    </>
  );
}
