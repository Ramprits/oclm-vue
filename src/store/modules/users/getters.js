export default {
  isAuthenticated(state) {
    return state.isAuthenticated;
  },
  user(state) {
    return state.user;
  },
  error(state) {
    return state.errorMessage;
  },
  loading(state) {
    return state.loading;
  },
};
