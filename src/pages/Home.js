import styles from './Home.module.css'
import AddTask from '../components/tasks/AddTask';
import ModalTask from '../components/tasks/modal_task/ModalTask';
import Filter from '../components/layout/filter/Filter';
import { useState } from 'react';
import UserProfile from '../components/userProfile/UserProfile';

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
                <Filter />
            </div>

            <div className={styles.filter_container}>
                <AddTask status="Para Fazer" handleShow={handleShow} />
                <AddTask status="In Progresso" handleShow={handleShow} />
                <AddTask status="Concluído" handleShow={handleShow} />
                <AddTask status="Revisar" handleShow={handleShow} />
            </div>


            <ModalTask show={showModal} handleClose={handleClose} />

        </main>
    );
}

export default Home;
