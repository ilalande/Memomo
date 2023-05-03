import { useEffect, useState } from 'react';
import styles from '../../styles/MemoCard.module.css';
import { putMemoRequest } from '../../requests/memos';

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
      <input
        className={styles.colourClass}
        type='text'
        id={id}
        onChange={(e) => fillMemo(e)}
        onBlur={putMemoInDb}
        value={memoContent}
      />
    </div>
  );
}
