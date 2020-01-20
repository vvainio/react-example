import api from './api';

export default {
  authenticateSession: (data) => api.post('/sessions', data),
  invalidateSession: (id) => api.delete(`/sessions/${id}`),
};
