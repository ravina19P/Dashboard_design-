import './App.css';
import Dashboard from './Component/Dashboard';
import Navbar from './Component/Navbar';
import Page1 from './Component/Page1';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/home' element={<Page1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
