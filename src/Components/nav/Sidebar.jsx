import React from 'react';
import {
  BsNewspaper,
  BsFillHouseDoorFill,
  BsFillPersonFill,
} from 'react-icons/bs/';
import { Link } from 'react-router-dom';
function Sidebar() {
  return (
    <div class="sidebar">
      <h3>Menu</h3>
      <Link to="/">
        <BsFillHouseDoorFill /> Início
      </Link>
      <br />
      <div className="separador"></div>
      <br />
      <Link to="/relatorios">
        <BsNewspaper /> Relatórios
      </Link>
      <Link to="/perfil">
        <BsFillPersonFill /> Perfil{' '}
      </Link>
      <br />
      <div className="separador"></div>
    </div>
  );
}

export default Sidebar;
