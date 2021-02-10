const isAuthenticated = state => state.auth.token.isAuth;
const authSelectors = {
  isAuthenticated,
};

export default authSelectors;
