import ColorPriority from '../input_task/color_priority/ColorPriority';
import InputTask from '../input_task/InputTask';
import styles from './ModalTask.module.css';

function ModalTask({ show, handleClose }) {
    if (!show) return null;

    return (
        <div className={styles.modal}>
            <div className={styles.modal_content}>
                <div className={styles.content_close}>
                    <button className={styles.close} onClick={handleClose}>&times;</button>
                </div>
                <p className={styles.color_p_modal}>Projetos / Novas task</p>

                <h2>Create new task</h2>
                <span className={styles.subdescription}>
                    <p>Add your teammate to your team and start working together on getting done!</p>
                </span>

                <span className={styles.info_for_label}>
                    <p>Title</p>
                </span>
                <InputTask text_placeholder="Enter title" />

                <span className={styles.info_for_label}>
                    <p>Description</p>
                </span>
                <InputTask text_placeholder="Enter description" />

                <div className={styles.label_priority}>
                    <p>Label Colour</p>
                    <span>
                        <ColorPriority />
                    </span>
                </div>

                <button onClick={handleClose}>Salvar</button>
            </div>
        </div>
    );
}

export default ModalTask;
