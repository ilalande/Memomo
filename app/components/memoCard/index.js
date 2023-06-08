'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../../../styles/MemoCard.module.scss';
import { putMemoRequest } from '../../../utils/requestsDatas';

export default function Memocard({ id, content, colour, boardId }) {
  const [colourClass, setColourClass] = useState('');
  const [memoContent, setMemoContent] = useState(content);
  const fillMemo = (e) => {
    setMemoContent((prevState) => {
      return e.target.value;
    });
  };

  const putMemoInDb = async (content) => {
    const body = {
      id: id,
      colour: colour,
      content: memoContent,
      board: boardId,
    };
    try {
      putMemoRequest(body);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    setColourClass(`colour${colour}`);
  }, []);

  return (
    <div className={`${styles.memo} ${styles[colourClass]}`}>
      <div className={styles.memoText}>
        <textarea
          className={styles.colourClass}
          id={id}
          onChange={(e) => fillMemo(e)}
          onBlur={putMemoInDb}
          value={memoContent}
          title='remplissez ou modifiez ce mémo'
        />
      </div>
      {/* <div className={styles.memoImg}>
        <button
          onClick={() => {
            deleteMemo(id);
          }}
          type="image"
        >
          <Image
            src='/XMark.svg'
            width={25}
            height={25}
            alt='X to delete the memo'
          />
        </button>
      </div> */}
    </div>
  );
}
