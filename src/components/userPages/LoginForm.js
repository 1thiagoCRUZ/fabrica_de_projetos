import styles from './LoginForm.module.css'

function LoginForm() {
    return (
        <div className={styles.form_login}>
            <form >
                <h3>Faça login</h3>
                <label>Digite seu e-mail</label>

                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Digite seu e-mail"
                    />
                </div>
                <label>Digite sua senha</label>
                <div><input
                    type="text"
                    name="name"
                    placeholder="Digite sua senha"
                /></div>
                <button className={styles.btn_login}>Entrar</button>
            </form>
        </div>
    )
}

export default LoginForm