'use client';
import styles from '../../styles/plusMemoButton.module.scss';
import { addMemoRequest } from '../../lib/requestsDatas';

export default function PlusMemoButton() {
  // Function to add memos
  const addMemo = async (colourId) => {
    const body = {
      colour: colourId,
      content: '',
      board: boardDatas.id,
    };
    await addMemoRequest(body);
  };
  return (
    <>
      <div className={styles.plusButtonOnBoard}>
        <button
          type='text'
          alt='Créez un nouveau mémo rose '
          className={`${styles.addMemo2}`}
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
          className={styles.addMemo1}
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
          className={styles.addMemo3}
          onClick={() => {
            addMemo(3);
          }}
        >
          &nbsp; + &nbsp;
        </button>
      </div>
    </>
  );
}
