import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Auth from './Components/auth/Auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ResetPassword from './Components/forgot-password/ResetPassword';
import Header from './Components/Header/index'

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="reset-password/:id" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
