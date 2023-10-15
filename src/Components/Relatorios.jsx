import React from 'react';
import { BsFillTrashFill, BsNewspaper } from 'react-icons/bs/';
import ReactLoading from 'react-loading';

import useFetch from '../Hooks/useFetch';
import { EMPLOYEE_GET } from '../api';

function Relatorios() {
  const { loading, request, error, data } = useFetch();
  const accessToken = window.localStorage.getItem('accessToken');
  const userId = window.localStorage.getItem('userId');
  React.useEffect(() => {
    async function load() {
      const { url, options } = EMPLOYEE_GET(userId, accessToken);
      await request(url, options);
    }
    load();
  }, [accessToken, request, userId]);

  if (error) return '<div>Error</div>';
  if (loading)
    return (
      <div className="content d-flex align-items-center justify-content-center">
        <ReactLoading type="spin" color="#0000FF" height={100} width={50} />
      </div>
    );
  return (
    <div class="content">
      <div class="titulo-secao">
        <h2>Relatórios</h2>
        <br />
        <div class="separador"></div>
        <br />
        <p>
          <i class="fa-solid fa-user"></i> / Relatório de Funcionários
        </p>
      </div>

      <br />

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Funcionários</h3>
        </div>
        <div class="card-body p-0">
          <table class="table table-striped">
            <thead>
              <tr>
                <th style={{ width: '10px' }}>#</th>
                <th>Nome</th>
                <th>CPF</th>
                <th>E-mail</th>
                <th>Telefone</th>
                <th style={{ width: '40px' }}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((el, i) => (
                <tr key={i}>
                  <td>{el['id']}</td>
                  <td>{el['nome']}</td>
                  <td>{el['cpf']}</td>
                  <td>{el['email']}</td>
                  <td>{el['telefone']}</td>
                  <td>
                    <div class="btn-group">
                      <a href="/" class="btn btn-success">
                        <BsNewspaper />
                      </a>
                      <a href="/" class="btn btn-danger">
                        <BsFillTrashFill />
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Relatorios;
