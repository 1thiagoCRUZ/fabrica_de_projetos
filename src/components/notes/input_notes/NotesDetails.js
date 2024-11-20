import styles from './NotesDetails.module.css'


function NotesDetailsInput( {details, setDetails} ) {
  return (
    <div className={styles.textareaContainer}>
      <textarea
        className={styles.textarea}
        placeholder="Detalhes da nota..."
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      />
    </div>
  );
}


export default NotesDetailsInput;
