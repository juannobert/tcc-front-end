import React from 'react';
import { UserContext } from '../../UserContext';
import { Navigate } from 'react-router-dom';
import Sidebar from '../nav/Sidebar';
import Menu from '../nav/Menu';

function ProtectedRoute({ children }) {
  const { login } = React.useContext(UserContext);
  return login ? (
    <div>
      <Menu />
      <div className="main">
        <Sidebar />
        {children}
      </div>
    </div>
  ) : (
    <Navigate to="/auth/login" />
  );
}

export default ProtectedRoute;
