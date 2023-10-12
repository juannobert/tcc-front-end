import React from 'react';
import Input from '../../Forms/Input';
import Button from '../../Forms/Button';
import useForm from '../../../Hooks/useForm';
import { AiOutlineUser, AiFillUnlock } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../UserContext';

function Login() {
  const email = useForm('email');
  const senha = useForm(true);

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    if (email.validate() && senha.validate()) {
      userLogin(email.value, senha.value);
    }
  }

  return (
    <div className="col">
      <div className="container bg-white container-form">
        <div>
          <div>
            <h6 className="title-2">Bem vindo ao</h6>
          </div>
          <div>
            <h1 className="title-1">Painel Do Empregador</h1>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <Input placeholder="Email" type="text" name="email" {...email}>
            <AiOutlineUser />
          </Input>
          <Input placeholder="Senha" type="text" name="password" {...senha}>
            <AiFillUnlock />
          </Input>
          <div className="row text-end">
            <a className="primary-color" href="/">
              Esqueceu a senha?
            </a>
          </div>
          <Button>Entrar</Button>
          <div className="row mt-2 text-center">
            <p>
              Não tem uma conta?{' '}
              <Link to="/auth/register" className="primary-color">
                Crie uma
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
