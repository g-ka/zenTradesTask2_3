import './style.css';
import { Routes, Route } from 'react-router-dom';
import Auth from './component/auth/Auth';
import Dash from './component/dash/Dash';
import Email from './component/email/Email';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Auth />} />
      <Route path='/dash' element={<Dash />} />
      <Route path='/email' element={<Email />} />
    </Routes>    
  );
}

export default App;