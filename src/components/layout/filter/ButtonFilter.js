import styles from './ButtonFilter.module.css'

function ButtonFilter( {text, show}) {
    return (
        <div className={styles.btn_filter_container}>
            <button onClick={show}>{text}</button>
        </div>
    )
}

export default ButtonFilter;