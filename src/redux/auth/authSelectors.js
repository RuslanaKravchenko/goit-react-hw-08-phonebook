const isAuthenticated = state => state.auth.token.isAuth;
const showProfile = state => state.auth.user.showProfile;
const getUserName = state => state.auth.user.displayName;
const getUserEmail = state => state.auth.user.email;
const getToken = state => state.auth.token.idToken;
const authSelectors = {
  isAuthenticated,
  showProfile,
  getUserName,
  getUserEmail,
  getToken,
};

export default authSelectors;
