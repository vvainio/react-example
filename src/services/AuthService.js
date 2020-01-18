const mockPromise = new Promise((resolve) => setTimeout(resolve, 300));

const AuthService = {
  isAuthenticated: false,

  authenticate() {
    return mockPromise.then(() => {
      AuthService.isAuthenticated = true;
    });
  },

  signout() {
    return mockPromise.then(() => {
      AuthService.isAuthenticated = false;
    });
  },
};

export default AuthService;
