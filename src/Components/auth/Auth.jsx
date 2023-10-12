import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login/Login';
import './Auth.css';
import { ReactComponent as Logo } from '../../Assets/Illustration.svg';
import Register from './Login/Register';
import { UserContext } from '../../UserContext';

function Auth() {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/" />;
  return (
    <div style={{ background: '#E5E5E5' }} className="container">
      <div className="row vh-100 align-items-center">
        <div className="col-md-6 image">
          <Logo className="img-fluid w-75" />
        </div>
        <Routes>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default Auth;
