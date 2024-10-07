import styles from './AddTask.module.css';
import { MdOutlineAdd } from "react-icons/md";
import { IoMdMore } from "react-icons/io";

function AddTask({ status, handleShow }) {
    return (
        <div className={styles.card_add_task}>
            <span>
                <h4>{status}</h4>
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
