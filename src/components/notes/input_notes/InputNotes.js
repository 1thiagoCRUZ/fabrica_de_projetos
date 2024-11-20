import styles from './InputNotes.module.css'

function InputNotes( { text_placeholder, noteTitle, setNoteTitle }) {
    return (
        <>
            <input className={styles.input_notes} placeholder={text_placeholder} value={noteTitle}
        onChange={(e) => setNoteTitle(e.target.value)}/>
        </>
    )
}

export default InputNotes
