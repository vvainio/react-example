const mockPromise = new Promise((resolve) => setTimeout(resolve, 300));
const mockAuthData = { username: 'Foobar' };

const AuthService = {
  signin() {
    return mockPromise.then((data = mockAuthData) => data);
  },

  signout() {
    return mockPromise;
  },
};

export default AuthService;
