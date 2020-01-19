const DEBUG_REJECT = false;

const mockPromise = (data) => new Promise((resolve, reject) => (
  setTimeout(DEBUG_REJECT ? reject : resolve(data), 300)
));

const api = {
  authenticateSession(data) {
    return mockPromise(data);
  },

  invalidateSession() {
    return mockPromise();
  },
};

export default api;
