'use client';
import { deleteMemoRequest } from '../../../lib/requestsDatas';
import styles from '../../../styles/Board.module.scss';
import { useEffect, useState } from 'react';
import MemoCard from '../components/memoCard';
export default function BoardArea({ memosDatas }) {
  // Function to delete memos
  // const deleteMemo = async (id) => {
  //   await deleteMemoRequest(id);
  //   await getMemosDatas(boardDatas.id);
  // };
  // useEffect(() => {
  //   console.log(memosDatas);
  // }, [memosDatas]);

  return (
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
  );
}
