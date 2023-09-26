import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../Forms/Button';
import { AiOutlineUser } from 'react-icons/ai';
import Input from '../Forms/Input';

function ResetPassword() {
  // const params = useParams();
  return (
    <div class="container d-flex flex-column">
      <div
        class="row align-items-center justify-content-center
        min-vh-100 g-0"
      >
        <div class="col-12 col-md-8 col-lg-4 border-top border-3 border-danger">
          <div class="card shadow-sm">
            <div class="card-body">
              <div class="mb-4">
                <h5>Esqueceu a senha?</h5>
                <p class="mb-2">Altere sua senha na aplicação</p>
              </div>
              <form>
                <div class="mb-3">
                  <label for="email" class="form-label">
                    Senha
                  </label>
                  <Input
                    type="password"
                    id="senha1"
                    class="form-control"
                    name="email"
                  >
                    <AiOutlineUser />
                  </Input>
                  <label for="email" class="form-label">
                    Confirmar senha:
                  </label>
                  <Input
                    type="password"
                    id="senha2"
                    class="form-control"
                    name="email"
                  >
                    <AiOutlineUser />
                  </Input>
                </div>
                <div class="mb-3 d-grid">
                  <Button>Alterar senha</Button>
                </div>
                <span>
                  Não tem uma conta?
                  <Link to="/auth/register">Criar uma conta </Link>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
