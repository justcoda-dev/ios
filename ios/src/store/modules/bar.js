import api from "../../api";

export default {
    actions: {
        async fetchBar({commit}) {
            const barRq = await api.bar()
            const bar = await barRq.json()
            commit('updateBar', bar)
        }
    },
    mutations: {
        updateBar(state, bar) {
            state.bar = bar
        }
    },
    state: {
        bar: {}
    },
    getters: {
        allBar(state) {
            return state.bar
        }
    }
}