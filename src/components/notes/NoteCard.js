import { FiEdit2, FiTrash } from "react-icons/fi"
import { Link } from "react-router-dom"
import styles from "./notesCss/NoteCard.module.css"

function NoteCard({ id, name, description, handleRemove }) {
    return (
        
        <div className={styles.note_card}>
            <h4>{name}</h4>
            <div className={styles.line}></div>
            <span>
                <p>
                    {description}
                </p>
            </span>
            <div className={styles.notes_card_ations}>
                <Link to="/">
                    <FiEdit2 />
                </Link>
                <button>
                    <FiTrash />
                </button>
            </div>
        </div>
    )
}

export default NoteCard