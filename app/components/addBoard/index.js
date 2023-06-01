'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from '../../../styles/AddBoard.module.scss';

import { addBoardsRequest } from '../../../lib/requestsDatas';

export default function AddBoard({ boardsList }) {
  const [boardNameEntered, setboardNameEntered] = useState(['']);

  const saveBoardName = (e) => {
    setboardNameEntered(e.target.value);
  };

  const addBoard = async () => {
    let existingBoardEntered = false;

    // if a board with boardNameEntered exists, nothing happens (just the link).
    //if no existing board is found, one is created in database
    //if an existing board exists, the function does nothing, only lik is applied

    boardsList.map((board) => {
      if (boardNameEntered === board.board_name) {
        existingBoardEntered = true;

        return;
      }
    });
    if (!existingBoardEntered) {
      const body = { boardName: boardNameEntered };
      const res = await addBoardsRequest(body);
    }
  };
  return (
    <>
      <input
        type='text'
        id='boardName'
        className={styles.boardNameEnter}
        onBlur={saveBoardName}
      />
      <Link
        href={`/${boardNameEntered}`}
        className={styles.plusButtonHome}
        onClick={addBoard}
      >
        &nbsp; + &nbsp;
      </Link>
    </>
  );
}
