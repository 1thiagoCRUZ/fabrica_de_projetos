import { useState, useEffect } from 'react';
import { useAuth } from '../routes/AuthContext'; // Hook do AuthContext
import { useNavigate } from 'react-router-dom';
import google_icon from '../img/google_icon.svg';
import talklog from '../img/talkloglogo.svg';
import styles from './LoginForm.module.css';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false); // Estado para controlar o loading

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('https://api-authetication-jwt.onrender.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            setIsLoading(false);

            if (data.auth) {
                login(data.token);
                navigate('/');
            } else {
                setError(data.message);
            }
        } catch (err) {
            setIsLoading(false);
            setError('Erro ao fazer login');
        }
    };


    const handleGoogle = async (e) => {
        e.preventDefault();

        try {
            // Redirecionar diretamente para o Google via sua API
            const response = await fetch('https://api-authetication-jwt.onrender.com/login/google', {
                method: 'POST', // Supondo que o backend já cuide do redirecionamento para o Google
            });

            const data = await response.json();

            if (response.ok) {
                // Aqui você deve verificar o que está sendo retornado, 
                // normalmente o backend retornaria uma URL para o Google, como o link de autenticação.
                window.location.href = data.redirectUrl; // Aqui você redireciona o usuário para a URL de login do Google.
            } else {
                alert('Erro ao tentar logar com Google: ' + data.message);
            }
        } catch (error) {
            console.error('Erro ao tentar logar com Google:', error);
            alert('Erro de rede ou servidor.');
        }
    };



    useEffect(() => {
        // Capturando parâmetros de query da URL
        const params = new URLSearchParams(window.location.search);
        const token = params.get('access_token'); // Se estiver usando o Google OAuth direto (acesso com token)
        // Ou pode ser 'code' caso use o código de autorização do OAuth
        if (token) {
            localStorage.setItem('token', token); // Armazenando o token no localStorage
            login(token); // Chama a função de login com o token (contexto ou state)
            console.log('Login com Google bem-sucedido!');
            navigate('/'); // Redireciona para a página home após login bem-sucedido
        } else {
            console.log('Aguardando login com o Google');
        }
    }, [login, navigate]);


    return (
        <div className={styles.form_login}>
            {isLoading && (
                <div className={styles.overlay}>
                    <div className={styles.content_loader_login}>
                        <div className={styles.loader}></div>
                        <p>Validando...</p>
                    </div>
                </div>
            )}
            <span>
                <div className={styles.logo_container}>
                    <img src={talklog} alt="Logo" />
                    <div className={`${styles.ball} ${styles.ball1}`}></div>
                    <div className={`${styles.ball} ${styles.ball2}`}></div>
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
                        <img src={google_icon} className={styles.img_google_icon} alt="Google icon" />
                        <button onClick={handleGoogle} className={styles.btn_login_google}>
                            Faça login com o Google
                        </button>
                    </span>
                </form>
            </span>
        </div>
    );
}

export default LoginForm;
