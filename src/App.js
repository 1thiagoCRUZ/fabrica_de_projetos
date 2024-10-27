import Navbar from "./components/layout/nav/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from "./components/Container";
import Home from "./pages/Home";
import Sidebar from "./components/layout/nav/Sidebar";
import { AuthProvider } from "./routes/AuthContext";
import LoginForm from "./pages/LoginForm";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/login" element={<LoginForm />} />
          <Route exact path="/" element={
            <ProtectedRoute>
              <Navbar />
              <Sidebar />
              <Container customClass="min-height">
                <Home />
              </Container>
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
