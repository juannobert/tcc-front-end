import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import Input from './Forms/Input';
import useForm from '../Hooks/useForm';
import '../Assets/perfil.css';
import Button from './Forms/Button';
import { UserContext } from '../UserContext';
import { mask } from './Helper/Mask';
import Error from './Helper/Error';

function Perfil() {
  const { data, userUpdate, error, loading, verifyLogin } =
    React.useContext(UserContext);

  const [senha, setSenha] = React.useState(false);
  const senhaInput = useForm(true);
  const email = useForm('email', data['email']);
  const nome = useForm(true, data['nome']);
  const cpfCnpj = useForm('cpfCnpj', mask(data['cpfCnpj']));
  const endereco = useForm(true, data['endereco']);

  function showPasswordInput() {
    setSenha(!senha);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (senha !== true) {
      showPasswordInput();
    } else if (
      senha === true &&
      senhaInput.validate() &&
      email.validate() &&
      cpfCnpj.validate() &&
      endereco.validate() &&
      nome.validate()
    ) {
      const loginIsOk = await verifyLogin(data['email'], senhaInput.value);
      if (loginIsOk) {
        await userUpdate(
          endereco.value,
          nome.value,
          email.value,
          cpfCnpj.value,
        );
        if (error === null) {
          await verifyLogin(email.value, senhaInput.value, true);
          showPasswordInput();
        }
      }
    }
  }

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

      <div class="formperfil">
        <div class="card card-primary">
          <div class="card-header" style={{ backgroundColor: '#ff444c' }}>
            <h3 class="card-title">Editar Perfil</h3>
          </div>

          <form onSubmit={handleSubmit}>
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
                  {...cpfCnpj}
                >
                  <AiOutlineUser />
                </Input>
                {senha === true ? (
                  <Input
                    placeholder="Digite sua senha para prosseguir"
                    type="password"
                    name="senha"
                    {...senhaInput}
                  >
                    <AiOutlineUser />
                  </Input>
                ) : (
                  ''
                )}
              </div>
            </div>

            <div class="card-footer">
              {loading ? (
                <Button disabled>Carregando</Button>
              ) : (
                <Button>Alterar</Button>
              )}
              <div className="row mt-2 text-center">
                <Error error={error}></Error>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
