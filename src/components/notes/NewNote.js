import { useNavigate } from "react-router-dom";
import AddNote from "./AddNote";
import styles from "./notesCss/AddNote.module.css"

function NewNote() {

    const navigate = useNavigate()

    function createPost(note) {
        
        fetch("http://localhost:5000/notes", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(note)
        }).then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            navigate('/', { state: { message: 'Nota criada com sucesso!' } });
        })
        .catch(err => console.log(err))
    }

    return (
        <div className={styles.main}>
            <h2>Adicione sua nota</h2>
            <AddNote handleSubmit={createPost} btnText="Criar nota"/>
        </div>
    )
}

export default NewNote