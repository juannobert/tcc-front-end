import React from 'react';
import { UserContext } from '../UserContext';

function Home() {
  const { data } = React.useContext(UserContext);

  return (
    <div className="content">
      <div class="titulo-secao">
        <h2>Dashboard do Empregador</h2>
        <br />
        <div className="separador"></div>
        <br />
        <p>
          <i className="fa-solid fa-house"></i> / Dashboard Home
        </p>
      </div>

      <div class="box-info">
        <div style={{ backgroundColor: '#E32636' }} class="box-info-single">
          <div class="info-text">
            <h3>Código do empregador</h3>
            <p>{data['codigo']}</p>
          </div>
          <i class="fa-solid fa-clock"></i>
        </div>

        <div style={{ backgroundColor: '#6A5ACD' }} className="box-info-single">
          <div className="info-text">
            <h3>Empresa</h3>
            <p>{data['nome']}</p>
          </div>
          <i className="fa-solid fa-users"></i>
        </div>
      </div>
    </div>
  );
}

export default Home;
