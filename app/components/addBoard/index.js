'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../../styles/AddBoard.module.scss';
import { addBoardsRequest } from '../../../utils/requestsDatas';

export default function AddBoard({ boardsList }) {
  const router = useRouter();
  const [boardNameEntered, setboardNameEntered] = useState('');
  const [error, setError] = useState(false);

  const addBoard = async (e) => {
    e.preventDefault();
    let existingBoardEntered = false;
    // To mange error showing (accessiblity matter)
    if (boardNameEntered === '') {
      setError((prev) => {
        return true;
      });
      return;
    } else
      setError((prev) => {
        return false;
      });

    boardsList.map((board) => {
      if (boardNameEntered === board.board_name) {
        existingBoardEntered = true;
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
          onChange={(e) => {
            setboardNameEntered((prev) => {
              return e.target.value;
            });
          }}
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
          role='button'
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
