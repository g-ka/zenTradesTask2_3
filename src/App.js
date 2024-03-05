import './style.css';
import { Routes, Route } from 'react-router-dom';
import Auth from './component/auth/Auth';
import Dash from './component/dash/Dash';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Auth />} />
      <Route path='/dash' element={<Dash />} />
    </Routes>
    
  );
}

export default App;