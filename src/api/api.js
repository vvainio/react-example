import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || '',
});

const setAuthorizationHeader = (accessToken) => {
  api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

const clearAuthorizationHeader = () => {
  delete api.defaults.headers.common.Authorization;
};

export default {
  authenticateSession(data) {
    return api
      .post('/sessions', data)
      .then((response) => {
        setAuthorizationHeader(response.accessToken);
        return response;
      });
  },

  invalidateSession(id) {
    return api
      .delete(`/sessions/${id}`)
      .then((response) => {
        clearAuthorizationHeader();
        return response;
      });
  },
};
