import React from 'react';
import { useParams } from 'react-router-dom';
import { API_URL, EMPLOYEE_LIST } from './api';
import useFetch from './Hooks/useFetch';
import ReactLoading from 'react-loading';
import { FaDownload } from 'react-icons/fa';
import { format } from 'date-fns';

function Funcionario() {
  const { id } = useParams();

  const { loading, request, error, data } = useFetch();
  const accessToken = window.localStorage.getItem('accessToken');
  React.useEffect(() => {
    async function load() {
      const { url, options } = EMPLOYEE_LIST(id, accessToken);
      await request(url, options);
    }
    load();
  }, [accessToken, request, id]);

  if (error) return '<div>Error</div>';
  if (loading)
    return (
      <div className="content d-flex align-items-center justify-content-center">
        <ReactLoading type="spin" color="#0000FF" height={100} width={50} />
      </div>
    );
  if (data?.content)
    return (
      <div class="content">
        <div class="titulo-secao">
          <h2>Relatórios</h2>

          <br />
          <div class="separador"></div>
          <br />
          <p>
            <i class="fa-solid fa-user"></i> /Registros
          </p>
        </div>

        <br />

        <div class="card">
          <div class="card-header d-flex justify-content-between">
            <h3 class="card-title">Registro de entrada e saída</h3>
            <div>
              <a
                target="_blank"
                href={API_URL + '/relatorios/funcionario/registro/' + id}
                rel="noreferrer"
              >
                <FaDownload color="white" />
              </a>
            </div>
          </div>
          <div class="card-body p-0">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th style={{ width: '10px' }}>#</th>
                  <th>Hora Entrada</th>
                  <th>Hora Saída</th>
                </tr>
              </thead>

              <tbody>
                {data?.content.map((el, i) => (
                  <tr key={i}>
                    <td>{el['id']}</td>
                    <td>
                      {format(
                        new Date(el['horaEntrada']),
                        'dd/MM/yyyy HH:mm:ss',
                      )}
                    </td>

                    <td>
                      {' '}
                      {format(new Date(el['horaSaida']), 'dd/MM/yyyy HH:mm:ss')}
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

export default Funcionario;
