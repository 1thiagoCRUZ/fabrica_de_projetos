import styles from './Home.module.css';
import AddTask from '../components/tasks/AddTask';
import ModalTask from '../components/tasks/modal_task/ModalTask';
import Filter from '../components/layout/filter/Filter';
import { useState } from 'react';
import GetTasks from '../components/tasks/get_task/GetTasks';
import GetTaskByStatus from '../components/tasks/get_task/GetTaskByStatus';
import GoogleCalendarEmbed from '../components/calendar/Calendar';
import MyCalendar from '../components/calendar/Calendar';

function Home() {
    // Estado para controlar a visibilidade do modal
    const [showModal, setShowModal] = useState(false);

    // Função para fechar o modal
    const handleClose = () => setShowModal(false);

    // Função para abrir o modal
    const handleShow = () => setShowModal(true);

    return (
        <main className={styles.main}>
            <div className={styles.text_welcome}>
                <h2>Organize-se</h2>
                <Filter btnText="New Task" handleShow={handleShow} />
            </div>

            <div className={styles.filter_container}>
                <div className={styles.content_filter_task}>

                    <div>
                        <div className={styles.name_status}><AddTask status="Para Fazer" handleShow={handleShow} /></div>
                        <span><GetTaskByStatus status="pendente" /></span>
                    </div>


                    <div>
                        <div className={styles.name_status}><AddTask status="In Progresso" handleShow={handleShow} /></div>
                        <span><GetTaskByStatus status="in-progress" /></span>
                    </div>

                    <div>
                        <div className={styles.name_status}><AddTask status="Concluído" handleShow={handleShow} /></div>
                        <span><GetTaskByStatus status="concluido" /></span>
                    </div>

                    <div>
                        <div><AddTask status="Revisar" handleShow={handleShow} /></div>
                        <span><GetTaskByStatus status="revisar" /></span>
                    </div>
                </div>

            </div>

            <ModalTask show={showModal} handleClose={handleClose} />

        </main>
    );
}

export default Home;
