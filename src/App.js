import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from "./components/sidebarComponents/Sidebar";
import AddNote from './components/notes/AddNote';
import Home from './components/pages/Home';

function App() {
  return (
    <Router>
      <Sidebar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/addnote" element={<AddNote />} />

        </Routes>
    </Router>
  );
}

export default App;
