import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || '',
});

axiosInstance.interceptors.request.use((config) => {
  const { accessToken } = JSON.parse(window.localStorage.getItem('auth')) || {};
  const { headers } = config;

  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }

  return { ...config, headers };
});

export default axiosInstance;
