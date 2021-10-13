import api from "../../api";

export default {

    actions: {
        async fetchBg({commit}) {
            const bgRq = await api.background()
            const bg = await bgRq.json()
            commit('updateBg', bg)
        }
    },
    mutations: {
        updateBg(state, bg) {
            state.bg = bg
        }
    },
    state: {
        bg: []
    },
    getters: {
        allBg(state) {
            const src = state.bg.map(v => v.img).join('')
            return `url(${src})`
        }
    }
}