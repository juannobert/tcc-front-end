export const API_URL = 'https://ponto-go-71757936441c.herokuapp.com';
//export const API_URL = 'http://localhost:8080';
export function TOKEN_POST(body) {
  return {
    url: API_URL + '/auth/autenticar',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(body),
    },
  };
}

export function TOKEN_VALIDATE_POST(token) {
  return {
    url: API_URL + '/auth/token',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function USER_GET(id, token) {
  return {
    url: API_URL + '/empregadores/' + id,
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function EMPLOYEE_GET(id, token) {
  return {
    url: API_URL + '/funcionarios/empresa/' + id,
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function USER_POST(body) {
  return {
    url: API_URL + '/empregadores',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function USER_UPDATE(token, id, body) {
  return {
    url: API_URL + '/empregadores/' + id,
    options: {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(body),
    },
  };
}

export function RESET_PASWORD(body) {
  return {
    url: API_URL + '/public/change-password',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function SEND_EMAIL(body) {
  return {
    url: API_URL + '/public/forgot-password',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}
