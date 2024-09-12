import styles from './notesCss/ButtonNote.module.css'
import { Link } from 'react-router-dom'


function ButtonNote({ text, to }) {
    return (
        <Link className={styles.btn} to={to}>+ {text}</Link>
    )
}

export default ButtonNote