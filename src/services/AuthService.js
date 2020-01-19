const DEBUG_REJECT = false;

const mockPromise = () => new Promise((resolve, reject) => (
  setTimeout(DEBUG_REJECT ? reject : resolve, 300)
));

const AuthService = {
  signin(data) {
    return mockPromise().then((response = data) => response);
  },

  signout() {
    return mockPromise();
  },
};

export default AuthService;
