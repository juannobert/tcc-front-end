import React from 'react';
import {
  AiFillUnlock,
  AiOutlineUser,
  AiFillHome,
  AiOutlineUserAdd,
} from 'react-icons/ai';
import { GrDocumentUser } from 'react-icons/gr';
import Input from '../../Forms/Input';
import { Link } from 'react-router-dom';
import Button from '../../Forms/Button';

function Register() {
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
        <form>
          <Input placeholder="Nome da empresa" type="text" name="nome">
            <AiOutlineUserAdd />
          </Input>
          <Input placeholder="Email" type="text" name="email">
            <AiOutlineUser />
          </Input>
          <Input placeholder="Senha" type="text" name="password">
            <AiFillUnlock />
          </Input>
          <Input placeholder="CPF/CNPJ" type="text" name="cpfCnpj">
            <GrDocumentUser />
          </Input>
          <Input placeholder="Endereço" type="text" name="cpfCnpj">
            <AiFillHome />
          </Input>
          <Button>Registrar</Button>
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
