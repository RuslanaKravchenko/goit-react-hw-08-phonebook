const isAuthenticated = state => state.auth.user.isAuth;
const showProfile = state => state.auth.user.showProfile;
const getUserName = state => state.auth.user.displayName;
const getUserAvatar = state => state.auth.user.avatar;
const getUserEmail = state => state.auth.user.email;
const getToken = state => state.auth.token.idToken;
const authSelectors = {
  isAuthenticated,
  showProfile,
  getUserName,
  getUserEmail,
  getToken,
  getUserAvatar,
};

export default authSelectors;
