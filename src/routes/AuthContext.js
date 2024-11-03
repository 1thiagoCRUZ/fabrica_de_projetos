import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        token: null,
        isAuthenticated: false,
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setAuth({
                token: storedToken,
                isAuthenticated: true,
            });
        }
        setLoading(false); // Marca o carregamento inicial como concluído
    }, []);

    const login = (token) => {
        setAuth({
            token,
            isAuthenticated: true,
        });
        localStorage.setItem('token', token);
    };

    const logout = () => {
        setAuth({
            token: null,
            isAuthenticated: false,
        });
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
