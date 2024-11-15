import UserProfile from "../components/userProfile/UserProfile";
import styles from './Profile.module.css'

function Profile() {
    return (
        <main className={styles.main}>
            <UserProfile />
        </main>
    )
}

export default Profile