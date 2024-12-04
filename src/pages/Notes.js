
import { useState } from 'react';
import FilterNotes from '../components/notes/FilterNotes';
import styles from './Notes.module.css'
import ModalNotes from '../components/notes/modal_notes/ModalNotes';
import GetNotes from '../components/notes/get_notes/GetNotes';
function Notes() {

    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    return (
        <main className={styles.main}>
            <FilterNotes show={handleShow} />

            <GetNotes />
            <ModalNotes show={showModal} handleClose={handleClose}/>
        </main>
    )
}

export default Notes;