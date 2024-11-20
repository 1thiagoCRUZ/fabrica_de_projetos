import { Link } from 'react-router-dom'
import styles from './Filter.module.css'
import ButtonFilter from './ButtonFilter'

function Filter( {btnText, handleShow}) {
    return (
        <div className={styles.filter_container}>
            <button className={styles.filter_btn}>Agenda</button>
            <button className={styles.filter_btn} data-filter="category1">
                <Link to="/notes">
                    <span>Tasks</span>
                </Link>
            </button>
            <button className={styles.filter_btn} data-filter="category2">
                <Link to="/notes">
                    <span>Notes</span>
                </Link></button>
            <button className={styles.filter_btn} data-filter="category3">Calendário</button>

            <span className={styles.btn_filter_text}>
                <ButtonFilter text={btnText} show={handleShow} />
            </span>
        </div>
    )
}

export default Filter