import axios from "axios";

export default {
    async getOrders({commit}) {
        try {
            commit("setLoading", true);
            const {data} = await axios.get(`/work-orders?_limit=${10}`);
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
