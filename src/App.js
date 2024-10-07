import Navbar from "./components/layout/nav/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from "./components/Container";
import Home from "./components/layout/Home";
import Sidebar from "./components/layout/nav/Sidebar";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
