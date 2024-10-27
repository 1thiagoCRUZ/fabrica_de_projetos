import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        token: null,
        isAuthenticated: false,
    });

    // Lógica para realizar o login
    const login = (token) => {
        setAuth({
            token,
            isAuthenticated: true,
        });
        localStorage.setItem('token', token) // Usando o localstorage para conseguir armazenar o token
    };

    const logout = () => {
        setAuth({
            token: null,
            isAuthenticated: false,
        });
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};