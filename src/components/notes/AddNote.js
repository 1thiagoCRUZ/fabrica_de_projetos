import InputNote from "./InputNote"
import styles from "./notesCss/AddNote.module.css"
import SubmitButton from "./SubmitButton"

function AddNote() {
    return (
        <div className={styles.main}>
            <h2>Adicione sua nota</h2>
            <form className={styles.form}>
                <h3>Crie uma nova nota</h3>
                <InputNote
                    type="text"
                    text="Título da nota"
                    name="name"
                    placeholder="Insira o título da nota"
                />

                <InputNote
                    type="text"
                    text="Descrição da nota"
                    name="description"
                    placeholder="Descreva o que gostaria de fazer..."
                />

                <SubmitButton text="Criar nota" />
            </form>
        </div>
    )
}

export default AddNote