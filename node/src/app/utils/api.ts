export const api = {
  getUsers: async () => {
    try {
      const response = await fetch('http://localhost:8000/api/users/');
      if (!response.ok) {
        throw new Error('Erro ao buscar usuários');
      }
      const data = await response.json();
      console.log('/api/users/', data)
    } catch (error) {
      throw new Error('Erro ao buscar usuários');
    }
  },
  createUser: async (username: string, email: string, password: string) => {
    try {
      const response = await fetch('http://localhost:8000/api/create-user/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();
      console.log('dataApi', data.detail)

      if (!response.ok) {
        setSuccess(data.detail);
        setError('');
      } else {
        setError(data.detail);
        setSuccess('');
      }
    } catch (error) {
      setError('Erro ao enviar o e-mail. Por favor, tente novamente.');
      setSuccess('');
    }
  },
  sendResetEmail: async (username: string, email: string) => {
    try {
      const response = await fetch('http://localhost:8000/api/send-reset-email/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email }),
      });

      const data = await response.json();
      console.log('dataApi', data)

      if (!response.ok) {
        setSuccess(data.message);
        setError('');
      } else {
        setError(data.message);
        setSuccess('');
      }
    } catch (error) {
      setError('Erro ao enviar o e-mail. Por favor, tente novamente.');
      setSuccess('');
    }
  },

}
function setError(arg0: string) {
  return arg0;
}

function setSuccess(message: any) {
  return message;
}
