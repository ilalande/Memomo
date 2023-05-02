import styles from '../../styles/Board.module.css';

export default function Memocard({ id, content, color }) {
  return <div className={styles.boardHeader}>{content}</div>;
}
