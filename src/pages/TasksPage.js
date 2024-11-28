import { useState } from 'react';
import styles from './Home.module.css'
import Filter from '../components/layout/filter/Filter';
import GetTasks from '../components/tasks/get_task/GetTasks';
import ModalTask from '../components/tasks/modal_task/ModalTask';

function TasksPage() {
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    return (
        <main className={styles.main}>
            <div className={styles.text_welcome}>
                <h2>Organize-se</h2>
                <Filter btnText="New Task" handleShow={handleShow} />
            </div>

            <GetTasks />
            <ModalTask show={showModal} handleClose={handleClose} />
        </main>
    )
}

export default TasksPage