import axios from "axios";
import router from "../../../router/index.js";

export default {
    async login({commit}, {identifier, password}) {
        try {
            commit("setLoading", true);
            const {data} = await axios.post("/auth/local", {
                identifier,
                password,
            });
            if (!data.jwt) {
                return throw new Error("Failed to authenticate");
            }
            const {jwt, user} = data;
            commit("setUser", {jwt, user});
            await router.push("/dashboard");
            commit("setLoading", false);
            localStorage.setItem("@userInformation", JSON.stringify(user));
            localStorage.setItem("@userTokenInformation", jwt);
        } catch (error) {
            console.log(error);
            commit("setLoading", false);
            commit("setError", error.message);
        }
    },
    async register({commit}, {username, email, password}) {
        try {
            commit("setLoading", true);
            const {data} = await axios.post("/auth/local/register", {
                username,
                email,
                password,
            });
            if (!data.jwt) {
                throw new Error("Failed to create new user please try again");
            }
            const {jwt, user} = data;
            commit("setUser", {jwt, user});
            await router.push("/dashboard");
            commit("setLoading", false);
            localStorage.setItem("@userInformation", JSON.stringify(user));
            localStorage.setItem("@userTokenInformation", jwt);
        } catch (error) {
            console.log(error);
            commit("setLoading", false);
            commit("setError", error.message);
        }
    },
    async logout({commit}) {
        localStorage.removeItem("@userInformation");
        localStorage.removeItem("@userTokenInformation");
        await router.push("/login");
        commit("logout");
    },
    loadUser({commit}, payload) {
        commit("setUser", {jwt: payload.jwt, user: payload.user});
    },
};
