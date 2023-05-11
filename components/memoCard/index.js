import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/MemoCard.module.scss';
import { putMemoRequest } from '../../requests/memos';

export default function Memocard({ id, content, colour, boardId, deleteMemo }) {
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
          type='text'
          id={id}
          onChange={(e) => fillMemo(e)}
          onBlur={putMemoInDb}
          value={memoContent}
        />
      </div>
      <div className={styles.memoImg}>
        <button
          onClick={() => {
            deleteMemo(id);
          }}
        >
          <Image
            src='/XMark.svg'
            width={25}
            height={25}
            alt='X to delete the memo'
          />
        </button>
      </div>
    </div>
  );
}
