export default {
  setUser(state, { jwt, user }) {
    state.user = user;
    state.token = jwt;
    state.isAuthenticated = !!jwt;
    state.errorMessage = "";
  },
  setError(state, payload) {
    state.errorMessage = payload;
  },
  setLoading(state, payload) {
    state.loading = payload;
  },
  logout(state) {
    state.loading = false;
    state.user = null;
    state.isAuthenticated = false;
    state.errorMessage = "";
  },
};
