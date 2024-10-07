import styles from './AddTask.module.css'
import { MdOutlineAdd } from "react-icons/md";
import { IoMdMore } from "react-icons/io";

function AddTask({status}) {
    return (
        <div className={styles.card_add_task}>
            <span>
                <h4>{status}</h4>
            </span>

            <span>
                <MdOutlineAdd />
                <IoMdMore />
            </span>
        </div>
    )
}

export default AddTask