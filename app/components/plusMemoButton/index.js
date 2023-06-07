'use client';
import { useTransition } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../../styles/plusMemoButton.module.scss';
import { addMemoRequest, getMemosByBoardId } from '../../../lib/requestsDatas';

export default function PlusMemoButton({ boardDatas, colorId, memosDatas }) {
  const router = useRouter();
  // See doc about useTRansition in react 18 https://react.dev/reference/react/useTransition
  const [isPending, startTransition] = useTransition();

  // Function to add memos
  const getMemosDatas = async (id) => {
    const { data } = await getMemosByBoardId(id);
    setMemosDatas(data);
  };

  // Function to add memos
  const addMemo = async (cid) => {
    const body = {
      colour: cid,
      content: '',
      board: boardDatas.id,
    };
    await addMemoRequest(body);
    startTransition(() => {
      // Refresh the current route and fetch new data from the server without
      // losing client-side browser or React state.
      router.refresh();
    });
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
          title={
            colorId === '1'
              ? 'Ajouter un mémo bleu'
              : colorId === '2'
              ? 'Ajouter un mémo rose'
              : 'Ajouter un mémo jaune'
          }
        >
          &nbsp; + &nbsp;
        </button>
      </div>
    </>
  );
}
