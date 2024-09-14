import { useLocation } from "react-router-dom"
import Message from "../layout/Message"
import Notes from "../notes/Notes"

function Home() {
    const location = useLocation()
    let message = ''
    if(location.state) {
        message = location.state.message
    }
    return (
        <>
            <Notes />
            {message && <Message type="success" msg={message} />}
        </>
    )
}

export default Home