import Navbar from "./components/layout/nav/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from "./components/Container";
import Home from "./pages/Home";
import Sidebar from "./components/layout/nav/Sidebar";
import { AuthProvider } from "./routes/AuthContext";
import LoginForm from "./pages/LoginForm";
import ProtectedRoute from "./routes/ProtectedRoute";
import Profile from "./pages/Profile";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Notes from "./pages/Notes";
import Consultas from "./pages/Consultas";
import TasksPage from "./pages/TasksPage";
import MyCalendar from "./components/calendar/Calendar";
import Chat from "./components/chat/Chat";

function App() {
  return (
    <AuthProvider>
      <Router>
        <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} theme="colored" />
        <Routes>
          <Route path="/login" element={<LoginForm />} />

          <Route path="/agenda" element={
            <ProtectedRoute>
              <Navbar />
              <Sidebar />
              <Container customClass="min-height">
                <MyCalendar />
              </Container>
            </ProtectedRoute>
          } />


          <Route path="/chat" element={
            <ProtectedRoute>
              <Navbar />
              <Sidebar />
              <Container customClass="min-height">
                <Chat />
              </Container>
            </ProtectedRoute>
          } />

          <Route path="/tasks" element={
            <ProtectedRoute>
              <Navbar />
              <Sidebar />
              <Container customClass="min-height">
                <TasksPage />
              </Container>
            </ProtectedRoute>
          } />

          <Route path="/notes" element={
            <ProtectedRoute>
              <Navbar />
              <Sidebar />
              <Container customClass="min-height">
                <Notes />
              </Container>
            </ProtectedRoute>
          } />

          <Route path="/consultas" element={
            <ProtectedRoute>
              <Navbar />
              <Sidebar />
              <Container customClass="min-height">
                <Consultas />
              </Container>
            </ProtectedRoute>
          } />


          <Route path="/profile_user" element={
            <ProtectedRoute>
              <Navbar />
              <Sidebar />
              <Container customClass="min-height">
                <Profile />
              </Container>
            </ProtectedRoute>
          } />


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
