import React from 'react';
import Input from '../../Forms/Input';
import { AiOutlineUser } from 'react-icons/ai';
import useForm from '../../../Hooks/useForm';
import useFetch from '../../../Hooks/useFetch';
import { SEND_EMAIL } from '../../../api';
import Error from '../../Helper/Error';
import { useNavigate } from 'react-router-dom';
import Button from '../../Forms/Button';

function SendEmail() {
  const email = useForm('email');
  const { loading, error, request } = useFetch();
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();

    if (email.validate()) {
      const { url, options } = SEND_EMAIL({
        email: email.value,
      });
      const { response } = await request(url, options);
      if (response.ok === true) {
        navigate('/auth/login?msg=Verifique seu email para alterar a senha');
      }
    }
  }
  return (
    <div className="col">
      <div className="container bg-white container-form">
        <div>
          <div>
            <h6 className="title-2">Bem vindo a </h6>
          </div>
          <div>
            <h1 className="title-1">Recuperção de senha</h1>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <Input placeholder="Email" type="text" name="email" {...email}>
            <AiOutlineUser />
          </Input>

          {loading ? (
            <Button disabled>Carregando</Button>
          ) : (
            <Button>Entrar</Button>
          )}
          <div className="row mt-2 text-center">
            <Error error={error}></Error>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SendEmail;
