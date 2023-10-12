import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';

function Menu() {
  return (
    <header className="header">
      <div className="info-header">
        <div className="logo">
          <h3>Easy Point</h3>
        </div>
        <div className="icons-header">
          <AiOutlineUser />
        </div>
      </div>
      <div style={{ alignItems: 'center' }} className="info-header">
        <AiOutlineUser />
        <AiOutlineUser />
        <img
          src="https://www.arita.com.br/wp-content/uploads/2020/08/pessoa-expansiva-principais-caracteristicas-desta-personalidade.jpg"
          alt="img"
        />
      </div>
    </header>
  );
}

export default Menu;
