import { useEffect, useState } from 'react';
import styles from '../../styles/MemoCard.module.css';

export default function Memocard({ id, content, colour }) {
  useEffect(() => {
    console.log(colour);
  }, []);
  return (
    <div className={`${styles.memo} ${styles[`colour${colour}`]}`}>
      {content}
    </div>
  );
}
