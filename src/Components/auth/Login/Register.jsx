import React from 'react';
import {
  AiFillUnlock,
  AiOutlineUser,
  AiFillHome,
  AiOutlineUserAdd,
} from 'react-icons/ai';
import { GrDocumentUser } from 'react-icons/gr';
import Input from '../../Forms/Input';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../Forms/Button';
import useFetch from '../../../Hooks/useFetch';
import useForm from '../../../Hooks/useForm';
import Error from '../../Helper/Error';
import { USER_POST } from '../../../api';

function Register() {
  const email = useForm('email');
  const senha = useForm(true);
  const nome = useForm(true);
  const endereco = useForm(true);
  const cpfCnpj = useForm('cpfCnpj');
  const { loading, request, error } = useFetch();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    if (
      email.validate() &&
      senha.validate() &&
      cpfCnpj.validate() &&
      endereco.validate() &&
      nome.validate()
    ) {
      const { url, options } = USER_POST({
        email: email.value,
        senha: senha.value,
        nome: nome.value,
        endereco: endereco.value,
        cpfCnpj: cpfCnpj.value,
      });

      const { response } = await request(url, options);

      if (response.ok === true) {
        navigate('/auth/login?register=true');
      }
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
          <Input
            placeholder="Nome da empresa"
            type="text"
            name="nome"
            {...nome}
          >
            <AiOutlineUserAdd />
          </Input>
          <Input placeholder="Email" type="text" name="email" {...email}>
            <AiOutlineUser />
          </Input>
          <Input placeholder="Senha" type="text" name="password" {...senha}>
            <AiFillUnlock />
          </Input>
          <Input placeholder="CPF/CNPJ" type="text" name="cpfCnpj" {...cpfCnpj}>
            <GrDocumentUser />
          </Input>
          <Input
            placeholder="Endereço"
            type="text"
            name="endereco"
            {...endereco}
          >
            <AiFillHome />
          </Input>
          <Error error={error}></Error>
          {loading ? (
            <Button>Carregando...</Button>
          ) : (
            <Button>Registrar</Button>
          )}
          <div className="row mt-2 text-center">
            <p>
              Ja tem uma conta?{' '}
              <Link className="primary-color" to="/auth/login">
                Faça login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
