export default function MemoCard({ id, content, colour }) {
  return (
    <MemoCard>
      <p>content</p>
      <input type='text' id={id} value={content} />
    </MemoCard>
  );
}
