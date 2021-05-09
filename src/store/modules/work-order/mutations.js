export default {
  setLoading(state, payload) {
    state.loading = payload;
  },
  setWorkOrders(state, payload) {
    state.workOrders = payload;
  },
  setError(state, payload) {
    state.error = payload;
  },
};
