import styles from './LoginForm.module.css';
import { useState } from 'react';
import { useAuth } from '../routes/AuthContext';
import { useNavigate } from 'react-router-dom';
import google_icon from '../img/google_icon.svg'
import talklog from '../img/talkloglogo.svg'

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://api-authetication-jwt.onrender.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (data.auth) {
                login(data.token); // Salva o token no contexto de autenticação
                navigate('/'); // Redireciona para a página Home
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('Erro ao fazer login');
        }
    };

    return (
        <div className={styles.form_login}>
            <span>
                <div className={styles.logo_container}>
                    <img src={talklog} />
                    <div className={styles.ball + ' ' + styles.ball1}></div>
                    <div className={styles.ball + ' ' + styles.ball2}></div>
                </div>
            </span>
            <span className={styles.form_container}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <h3>Login</h3>
                    {error && <p>{error}</p>}
                    <div>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Digite seu e-mail"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Digite sua senha"
                        />
                    </div>
                    <button className={styles.btn_login}>Entrar</button>
                    <span>
                        <a>OU</a>
                    </span><br />
                    <span className={styles.login_google_container}>
                        <img src={google_icon} className={styles.img_google_icon} />
                        <button className={styles.btn_login_google}>Faça login com o Google</button>
                    </span>
                </form>
            </span>
        </div>
    );
}

export default LoginForm;
