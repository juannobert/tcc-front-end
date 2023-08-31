import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import './Auth.css';
import { ReactComponent as Logo } from '../../Assets/Illustration.svg';
import Register from './Login/Register';

function Auth() {
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
