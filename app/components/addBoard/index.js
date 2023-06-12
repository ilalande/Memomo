'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../../styles/AddBoard.module.scss';
import { addBoardsRequest } from '../../../utils/requestsDatas';

export default function AddBoard({ boardsList }) {
  const router = useRouter();
  const [boardNameEntered, setboardNameEntered] = useState('');
  const [error, setError] = useState(false);

  const saveBoardName = (e) => {
    setboardNameEntered(e.target.value);
  };

  const addBoard = async () => {
    let existingBoardEntered = false;
    if (boardNameEntered === '') {
      setError(true);
      return;
    } else setError(false);
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
    router.push(`/${boardNameEntered}`);
  };
  return (
    <>
      <form
        onSubmit={addBoard}
        aria-label="formulaire de création d'un tableau ou d'accès à un tableau existant"
      >
        <input
          type='text'
          id='boardName'
          className={styles.boardNameEnter}
          onBlur={saveBoardName}
          aria-required='true '
          title='Entrez le nom du tableau'
          aria-describedby='error'
        />
        {error ? (
          <p className={styles.error} id='error'>
            {' '}
            &#9888; Le nom du tableau ne doit pas être vide{' '}
          </p>
        ) : null}
        <button
          type='button'
          className={styles.plusButtonHome}
          onClick={addBoard}
          title="Aller sur le tableau et le créer s'il n'existe pas"
        >
          &nbsp; + &nbsp;
        </button>
      </form>
    </>
  );
}
