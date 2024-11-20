import Filter from "../layout/filter/Filter"
import styles from './FilterNotes.module.css'

function FilterNotes( {show }) {
    return (
        <div className={styles.filter_container}>
            <div className={styles.text_welcome}>
                <h2>Organize-se</h2>
                <Filter btnText="New Note" handleShow={show}/>
            </div>
        </div>
    )
}

export default FilterNotes