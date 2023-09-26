
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Knowledge from './components/Knowledge';
import Landing from './components/Landing';
import Signup from './components/Signup';
import Login from './components/Login'
import Investor from './components/Investor';
import Home1 from './components/Home1';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/signup' element={< Signup />} />
        <Route path='/home' element={<Home />} />
        <Route path='/home/cnfm' element={<Home1 />} />
        <Route path='/know' element={<Knowledge />} />
        <Route path='/login' element={< Login />} />
        <Route path='/invest' element={< Investor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;