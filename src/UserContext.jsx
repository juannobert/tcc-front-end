import React from 'react';
import { TOKEN_POST, USER_GET, TOKEN_VALIDATE_POST, USER_UPDATE } from './api';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const userLogout = React.useCallback(
    async function () {
      setData(null);
      setError(null);
      setLoading(false);
      setLogin(false);
      window.localStorage.removeItem('accessToken');
      window.localStorage.removeItem('userId');
      navigate('/auth/login');
    },
    [navigate],
  );

  async function getUser(userId, token) {
    const { url, options } = USER_GET(userId, token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }
  async function userUpdate(endereco, nome, email, cpfCnpj) {
    let json;
    try {
      setError(null);
      setLoading(true);
      const accessToken = window.localStorage.getItem('accessToken');
      const { url, options } = USER_UPDATE(accessToken, data['id'], {
        email,
        nome,
        cpfCnpj,
        endereco,
      });
      const response = await fetch(url, options);
      json = await response.json();
      if (response.ok === false) throw new Error(json);
      console.log(response.status);
      setData(json);
    } catch (err) {
      console.log('deu merda');
      setError(
        json?.senha ||
          json?.email ||
          json?.endereco ||
          json?.nome ||
          json?.cpfCnpj,
      );
    } finally {
      setLoading(false);
    }
  }

  async function userLogin(email, senha) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ email, senha });
      const tokenRes = await fetch(url, options);
      if (!tokenRes.ok) throw new Error(`Login inválido`);
      const { accessToken, userId } = await tokenRes.json();
      window.localStorage.setItem('accessToken', accessToken);
      window.localStorage.setItem('userId', userId);
      await getUser(userId, accessToken);
      navigate('/');
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  async function verifyLogin(email, senha, isGet) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ email, senha });
      const tokenRes = await fetch(url, options);
      if (!tokenRes.ok) throw new Error(`Login inválido`);
      const { accessToken, userId } = await tokenRes.json();
      window.localStorage.setItem('accessToken', accessToken);
      window.localStorage.setItem('userId', userId);
      if (isGet === true) await getUser(userId, accessToken);
      navigate('/perfil');
      return true;
    } catch (err) {
      setError('Login inválido');
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    async function autoLogin() {
      const accessToken = window.localStorage.getItem('accessToken');
      const userId = window.localStorage.getItem('userId');
      if (accessToken) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(accessToken);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error('Token inválido');
          await getUser(userId, accessToken);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{
        userLogin,
        data,
        error,
        loading,
        login,
        userLogout,
        userUpdate,
        verifyLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
