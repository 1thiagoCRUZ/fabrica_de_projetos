import styles from '../layout/Home.module.css';
import AddTask from '../tasks/AddTask';
import ModalTask from '../tasks/ModalTask';
import Filter from './filter/Filter';
import { useState } from 'react';

function Home() {
    // Estado para controlar a visibilidade do modal
    const [showModal, setShowModal] = useState(false);

    // Função para fechar o modal
    const handleClose = () => setShowModal(false);
    
    // Função para abrir o modal
    const handleShow = () => setShowModal(true);

    return (
        <main className={styles.main}>
            <h2>Organize-se</h2>
            <Filter />

            <div className={styles.filter_container}>
                <AddTask status="Para fazer" handleShow={handleShow} />
                <AddTask status="Em Progresso" handleShow={handleShow} />
                <AddTask status="Concluído" handleShow={handleShow} />
                <AddTask status="Revisar" handleShow={handleShow} />
            </div>

            <ModalTask show={showModal} handleClose={handleClose} />
        </main>
    );
}

export default Home;
