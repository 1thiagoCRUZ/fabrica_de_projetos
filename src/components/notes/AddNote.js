import { useState } from "react"
import InputNote from "./InputNote"
import styles from "./notesCss/AddNote.module.css"
import SubmitButton from "./SubmitButton"

function AddNote({btnText, handleSubmit, noteData}) {

    const [note, setNote] = useState(noteData || {})

    // Constante que executa uma arrow function
    const submit = (e) => {
        e.preventDefault()
        handleSubmit(note)
    }

    function handleChange(e) {
        setNote({ ...note, [e.target.name]: e.target.value})
    }


    return (
       
            <form onSubmit={submit} className={styles.form}>
                <h3>Crie uma nova nota</h3>
                <InputNote
                    type="text"
                    text="Título da nota"
                    name="name"
                    placeholder="Insira o título da nota"
                    handleOnChange={handleChange}
                    value={note.name ? note.name : ''}
                />

                <InputNote
                    type="text"
                    text="Descrição da nota"
                    name="description"
                    placeholder="Descreva o que gostaria de fazer..."
                    handleOnChange={handleChange}
                    value={note.description ? note.description : ''}
                    style={{ height: '40px'}}
                />

                <SubmitButton text={btnText} />
            </form>
        
    )
}

export default AddNote