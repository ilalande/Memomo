'use client';
import styles from '../../styles/plusMemoButton.module.scss';
import { addMemoRequest } from '../../lib/requestsDatas';
import { useEffect, useState } from 'react';

export default function PlusMemoButton({ boardDatas, colorId }) {
  const [colorClass, setColorClass] = useState('');
  const [colorName, setColorName] = useState('');
  // Function to add memos
  const addMemo = async (cid) => {
    const body = {
      colour: cid,
      content: '',
      board: boardDatas.id,
    };
    await addMemoRequest(body);
  };
  //We define
  const defineColorParams = () => {
    switch (colorId) {
      case '1':
        setColorName('vert');
        setColorClass('addMemo1');
        break;
      case '2':
        setColorName('rose');
        setColorClass('addMemo2');
        break;
      case '3':
        setColorName('jaune');
        setColorClass('addMemo3');
        break;
    }
  };

  useEffect(() => {
    defineColorParams();
  }, []);

  return (
    <>
      <div className={styles.plusButtonOnBoard}>
        <button
          type='button'
          alt={`Créez un nouveau mémo de couleur ${colorName}`}
          className={styles.colorClass}
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
