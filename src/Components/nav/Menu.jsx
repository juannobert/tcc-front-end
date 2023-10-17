import React from 'react';
import { BiExit } from 'react-icons/bi';
import { UserContext } from '../../UserContext';
function Menu() {
  const { userLogout } = React.useContext(UserContext);
  return (
    <header className="header">
      <div className="info-header">
        <div className="logo">
          <h3>Easy Point</h3>
        </div>
      </div>
      <div style={{ alignItems: 'center' }} className="info-header">
        <button
          onClick={() => userLogout()}
          style={{ fontSize: 20 }}
          className="btn"
        >
          <BiExit />
        </button>
        <img
          src="https://cdn-icons-png.flaticon.com/512/4645/4645949.png"
          alt="img"
        />
      </div>
    </header>
  );
}

export default Menu;
