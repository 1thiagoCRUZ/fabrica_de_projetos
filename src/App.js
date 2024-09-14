import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from "./components/sidebarComponents/Sidebar";
import NewNote from './components/notes/NewNote';
import Home from './components/pages/Home';

function App() {
  return (
    <Router>
      <Sidebar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/newnote" element={<NewNote />} />

        </Routes>
    </Router>
  );
}

export default App;
