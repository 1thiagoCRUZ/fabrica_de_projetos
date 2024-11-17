import { useState } from "react";
import styles from './ModalBottomDetails.module.css'
import { MdChecklist } from "react-icons/md";

function ModalBottomDetails({  taskName, setTaskName }) {
    const [subtasks, setSubtasks] = useState(['Desenvolver o design do app', 'Responsividade', 'Protótipo']);

    const [newSubtask, setNewSubtask] = useState('');

    const handleAddSubtask = () => {
        if (newSubtask.trim()) {
            setSubtasks([...subtasks, newSubtask]);
            setNewSubtask('');
        }
    };

    return (
        <div className={styles.subtaskSection}>
            <div className={styles.subtasktext}>
                <span><h4>Sub-task</h4></span>
                <span className={styles.icon_subtask}><MdChecklist /></span>
            </div>
            
            <ul>
                {subtasks.map((task, index) => (
                    <li key={index}>
                        <input type="checkbox" id={`task-${index}`} className={styles.checkboxInput} />
                        <label htmlFor={`task-${index}`} className={styles.customCheckbox}></label>
                        <span>{task}</span>
                    </li>
                ))}
            </ul>


            <div className={styles.subtaskInputContainer}>
                <input
                    type="text"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)} 
                    placeholder="Nome da tarefa"
                    className={styles.subtaskInput}
                />
            </div>
        </div>
    );
}

export default ModalBottomDetails;
