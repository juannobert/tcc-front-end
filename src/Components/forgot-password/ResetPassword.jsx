import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Button from '../Forms/Button';
import { AiOutlineUser } from 'react-icons/ai';
import Input from '../Forms/Input';
import useForm from '../../Hooks/useForm';
import { RESET_PASWORD } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';

function ResetPassword() {
  const params = useParams();
  const { loading, request } = useFetch();
  const navigate = useNavigate();

  const senha = useForm(true);
  const confirmarSenha = useForm(true);

  const [error, setError] = React.useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    if (senha.value === confirmarSenha.value) {
      setError(null);
      const { url, options } = RESET_PASWORD({
        senha: senha.value,
        token: params.id,
      });

      await request(url, options);
      navigate('/auth/login?msg=Senha alterada com sucesso');
    } else {
      setError('Senhas não conferem');
    }
  }

  return (
    <div className="container d-flex flex-column">
      <div
        className="row align-items-center justify-content-center
        min-vh-100 g-0"
      >
        <div className="col-12 col-md-8 col-lg-4 border-top border-3 border-danger">
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="mb-4">
                <h5>Esqueceu a senha?</h5>
                <p className="mb-2">Altere sua senha na aplicação</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Senha
                  </label>
                  <Input
                    type="password"
                    id="senha1"
                    classNameName="form-control"
                    name="email"
                    {...senha}
                  >
                    <AiOutlineUser />
                  </Input>
                  <label htmlFor="email" className="form-label">
                    Confirmar senha:
                  </label>
                  <Input
                    type="password"
                    id="senha2"
                    className="form-control"
                    name="email"
                    {...confirmarSenha}
                  >
                    <AiOutlineUser />
                  </Input>
                </div>
                <div className="mb-3 d-grid">
                  {loading ? (
                    <Button>Carregando...</Button>
                  ) : (
                    <Button>Alterar senha</Button>
                  )}
                </div>
                <Error error={error}></Error>
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
