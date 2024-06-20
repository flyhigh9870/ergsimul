import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './layouts/Sidebar';
import AboutErg from './pages/AboutErg';
import Simulator from './pages/Simulator';
import Materials from './pages/Materials';
function App() {

  return (
    <Router basename="/ergsimul/">
      <div>
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Simulator />} />
            <Route path="/about-erg" element={<AboutErg />} />
            <Route path="/materials" element={<Materials />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
