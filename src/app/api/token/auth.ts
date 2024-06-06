const storeTokens = (accessToken: string, refreshToken: string) => {
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
};

const getTokens = () => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  return { accessToken, refreshToken };
};

const clearTokens = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};

export const login = async (username: string, password: string) => {
  try {
    const response = await fetch('http://localhost:8000/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        username,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to login');
    }

    const data = await response.json();
    console.log('Received tokens:', data);
    storeTokens(data.access_token, data.refresh_token);
    return data;
  } catch (error) {
    console.error('Error during login:', error);
    throw new Error('Failed to login');
  }
};

export const logout = () => {
  clearTokens();
};

const refreshAccessToken = async () => {
  const { refreshToken } = getTokens();
  if (!refreshToken) {
    throw new Error('No refresh token available');
  }

  try {
    const response = await fetch('http://localhost:8000/api/refresh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refresh_token: refreshToken }),
    });

    if (!response.ok) {
      throw new Error('Failed to refresh access token');
    }

    const data = await response.json();
    storeTokens(data.access_token, data.refresh_token);
    return data.access_token;
  } catch (error) {
    logout();
    throw new Error('Failed to refresh access token');
  }
};

export const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
  let { accessToken } = getTokens();
  const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
  };

  let response = await fetch(url, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  });

  if (response.status === 401) {
    accessToken = await refreshAccessToken();

    response = await fetch(url, {
      ...options,
      headers: {
        ...defaultHeaders,
        Authorization: `Bearer ${accessToken}`,
        ...options.headers,
      },
    });
  }

  return response;
};
