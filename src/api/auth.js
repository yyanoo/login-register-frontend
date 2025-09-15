import axios from "axios";

const base_url = "https://login-register-backend-13q6.onrender.com";

export const register = async ({ username, email, password }) => {
  const response = await axios.post(`${base_url}/api/auth/register`, {
    username,
    email,
    password,
  });
  return response.data;
};

export const login = async ({ username, password }) => {
  const response = await axios.post(
    `${base_url}/api/auth/login`,
    {
      username,
      password,
    },
    { withCredentials: true }
  );
  return response.data;
};

export const logout = async () => {
  const response = await axios.post(`${base_url}/api/auth/logout`, null, {
    withCredentials: true,
  });
  return response.data;
};

export const getPlayer = async ({ username }) => {
  const response = await axios.get(`${base_url}/api/auth/profile`, {
    params: { username },
  });
  return response.data;
};
