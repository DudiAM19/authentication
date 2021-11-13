import './App.css';
import {BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Login from './scene/Login';
import Daftar from './scene/Daftar';
import Dashboard from './scene/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login/>} />
      </Routes>
      <Routes>
        <Route path='/daftar' element={<Daftar />} />
      </Routes>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
