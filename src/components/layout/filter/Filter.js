import styles from './Filter.module.css'

function Filter() {
    return (
        <div className={styles.filter_container}>
            <button className={styles.filter_btn}>Agenda</button>
            <button className={styles.filter_btn} data-filter="category1">Tasks</button>
            <button className={styles.filter_btn} data-filter="category2">Notas</button>
            <button className={styles.filter_btn} data-filter="category3">Calendário</button>
        </div>
    )
}

export default Filter