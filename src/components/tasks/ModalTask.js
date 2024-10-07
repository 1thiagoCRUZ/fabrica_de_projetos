import styles from './ModalTask.module.css'; 

function ModalTask({ show, handleClose }) {
    if (!show) return null;

    return (
        <div className={styles.modal}>
            <div className={styles.modal_content}>
                <span className={styles.close} onClick={handleClose}>&times;</span>
                <p className={styles.color_p_modal}>Projetos / Novas task</p>

                <h2>Nome do projeto</h2>
                <input className={styles.input_task} placeholder='Digite o nome do projeto'/>
                <button onClick={handleClose}>Salvar</button>
            </div>
        </div>
    );
}

export default ModalTask;
