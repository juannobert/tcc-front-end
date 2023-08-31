import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Auth from './Components/auth/Auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/*" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
