import styles from './ModalTask.module.css';
import { MdOutlineDashboard } from "react-icons/md";
import TaskDetailsInput from './TaskDetails';
import ModalBottomDetails from './modal_bottom_details/ModalBottomDetails';
import StatusTask from './right_details/StatusTask';
import PriorityTask from './right_details/PriorityTask';
import DateTask from './right_details/DateTask';


function ModalTask({ show, handleClose }) {
    if (!show) return null;

    return (
        <div className={styles.modal}>
            <div className={styles.modal_content}>
                <div className={styles.content_close}>
                    <button className={styles.close} onClick={handleClose}>&times;</button>
                </div>
                <div className={styles.left_content}>
                    <p className={styles.color_p_modal}>Projetos / Novas task</p>

                    <h2>Create new task</h2>
                    <TaskDetailsInput />

                    <ModalBottomDetails />


                </div>

                <div className={styles.right_content}>
                    <div className={styles.content_right_text}>
                        <span>
                            <p>Atributos</p>
                        </span>
                        <span className={styles.icon_right_content}>
                            <MdOutlineDashboard />
                        </span>
                    </div>

                    <div className={styles.atributes_task}>
                        <div className={styles.task_details}>
                            <span><p>Status:</p></span>
                            <span><StatusTask /></span>
                        </div>

                        <div className={styles.task_details}>
                            <span><p>Prioridade:</p></span>
                            <span><PriorityTask /></span>
                        </div>

                        <div className={styles.task_details_date}>
                            <span><p>Data Final:</p></span>
                            <span><DateTask /></span>
                        </div>
                    </div>



                    <div className={styles.buttons_task}>
                    <button onClick={handleClose} className={styles.cancel_task}>Cancelar</button>
                        <button onClick={handleClose} className={styles.create_task}>Criar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalTask;
