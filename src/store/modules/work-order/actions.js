import axios from "axios";
export default {
  async fetchWorkOrders({ commit }) {
    try {
      commit("setLoading", true);
      const { data } = await axios.get("/work-orders");
      if (data) {
        commit("setWorkOrders", data);
        commit("setLoading", false);
      }
    } catch (error) {
      commit("setLoading", false);
      commit("setError", error.message);
    }
  },
};
