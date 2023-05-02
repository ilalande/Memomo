import styles from '../../styles/MemoCard.module.css';

export default function Memocard({ id, content, color }) {
  return <div className={styles.boardArea}>{content}</div>;
}
