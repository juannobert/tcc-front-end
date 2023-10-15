import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import Input from './Forms/Input';
import useForm from '../Hooks/useForm';
import '../Assets/perfil.css';
import Button from './Forms/Button';
import { UserContext } from '../UserContext';
import { mask } from './Helper/Mask';

function Perfil() {
  const { data } = React.useContext(UserContext);

  const email = useForm('email', data['email']);
  const nome = useForm(true, data['nome']);
  const cpfCnpj = useForm('cpfCnpj', mask(data['cpfCnpj']));
  const endereco = useForm(true, data['endereco']);
  return (
    <div class="content">
      <div class="titulo-secao">
        <h2>Perfil</h2>
        <br />
        <div class="separador"></div>
        <br />
        <p>
          <i class="fa-solid fa-user"></i> / Perfil do Administrador
        </p>
      </div>

      <br />

      <div class="col-md-6">
        <div class="card card-primary">
          <div class="card-header" style={{ backgroundColor: '#ff444c' }}>
            <h3 class="card-title">Editar Perfil</h3>
          </div>

          <form>
            <div class="card-body">
              <div class="form-group">
                <Input
                  placeholder="Nome"
                  type="text"
                  name="nome"
                  value="asws"
                  {...nome}
                >
                  <AiOutlineUser />
                </Input>
              </div>
              <div class="form-group">
                <Input placeholder="Email" type="text" name="email" {...email}>
                  <AiOutlineUser />
                </Input>
              </div>
              <div class="form-group">
                <Input
                  placeholder="Endereço"
                  type="text"
                  name="endereço"
                  {...endereco}
                >
                  <AiOutlineUser />
                </Input>
              </div>
              <div class="form-group">
                <Input
                  placeholder="CPF/CNPJ"
                  type="text"
                  name="cpfCnpj"
                  value="123"
                  {...cpfCnpj}
                >
                  <AiOutlineUser />
                </Input>
              </div>
            </div>

            <div class="card-footer">
              <Button>Alterar</Button>
            </div>
          </form>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h3>Dados do Admnistrador</h3>
          </div>
          <div class="card-body p-0">
            <div class="imagem-perfil">
              <img
                src="https://img.freepik.com/vetores-premium/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg"
                alt=""
              />
              <h3> {data['nome']} </h3>
              <p> {data['email']} </p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
