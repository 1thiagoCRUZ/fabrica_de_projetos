import styles from './InputTask.module.css'

function InputTask( { text_placeholder }) {
    return (
        <>
            <input className={styles.input_task} placeholder={text_placeholder} />
        </>
    )
}

export default InputTask
