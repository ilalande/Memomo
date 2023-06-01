'use client';
import styles from '../../../styles/plusMemoButton.module.scss';
import { addMemoRequest, getMemosByBoardId } from '../../../lib/requestsDatas';
import { useEffect, useState } from 'react';

export default function PlusMemoButton({ boardDatas, colorId, memosDatas }) {
  // Function to add memos
  const addMemo = async (cid) => {
    const body = {
      colour: cid,
      content: '',
      board: boardDatas.id,
    };
    await addMemoRequest(body);
  };

  return (
    <>
      <div className={styles.plusButtonOnBoard}>
        <button
          type='button'
          className={
            colorId === '1'
              ? styles.addMemo1
              : colorId === '2'
              ? styles.addMemo2
              : styles.addMemo3
          }
          onClick={() => {
            addMemo(colorId);
          }}
        >
          &nbsp; + &nbsp;
        </button>
      </div>
    </>
  );
}
