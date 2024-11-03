import styles from './AddTask.module.css';
import { MdOutlineAdd } from "react-icons/md";
import { IoMdMore } from "react-icons/io";

function AddTask({ status, handleShow }) {
    // Mapeamento de cores para cada status
    const statusColors = {
        "Para Fazer": "#E93838",
        "In Progresso": "#2B85D8",
        "Concluído": "#59D645",
        "Revisar": "#E9C238",
    };

    const color = statusColors[status] || "gray";

    return (
        <div className={styles.card_add_task}>
            <span className={styles.status_text}>
                <h4>{status}</h4>
                <span className={styles.status_dot} style={{ backgroundColor: color }}></span>
            </span>

            <span>
                <button onClick={handleShow}>
                    <MdOutlineAdd />
                </button>
                <IoMdMore />
            </span>
        </div>
    );
}

export default AddTask;
