export default {
    setLoading(state, payload) {
        state.loading = payload;
    },
    setWorkOrders(state, payload) {
        state.items = payload;
        state.totalItems = payload.length;
    },
    setError(state, payload) {
        state.error = payload;
    },
};
