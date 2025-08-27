import axios from "axios";

const base_url = "http://localhost:3000";

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

export const profile = async () => {
  const response = await axios.get(`${base_url}/api/auth/profile`, {
    withCredentials: true,
  });
  return response.data;
};
