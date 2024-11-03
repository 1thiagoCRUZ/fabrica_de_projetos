import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
    const { auth, loading } = useAuth();

    if (loading) {
        return null;
    }

    return auth.isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
