import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Auth from './Components/auth/Auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import './Assets/adminlte.min.css';
import ResetPassword from './Components/forgot-password/ResetPassword';
import Relatorios from './Components/Relatorios';
import Perfil from './Components/Perfil';
import React from 'react';
import { UserStorage } from './UserContext';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import Funcionario from './Funcionario';

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Routes>
          <Route path="/auth/*" element={<Auth />} />
          <Route path="reset-password/:id" element={<ResetPassword />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/relatorios"
            element={
              <ProtectedRoute>
                <Relatorios />
              </ProtectedRoute>
            }
          ></Route>

          <Route
            path="/relatorios/:id"
            element={
              <ProtectedRoute>
                <Funcionario />
              </ProtectedRoute>
            }
          ></Route>

          <Route
            path="/perfil"
            element={
              <ProtectedRoute>
                <Perfil />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
