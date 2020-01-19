import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || '',
});

api.interceptors.request.use((config) => {
  const { accessToken } = JSON.parse(window.localStorage.getItem('auth')) || {};
  const { headers } = config;

  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }

  return { ...config, headers };
});

export default {
  authenticateSession(data) {
    return api.post('/sessions', data);
  },

  invalidateSession(id) {
    return api.delete(`/sessions/${id}`);
  },
};
