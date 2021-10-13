import api from "../../api";

export default {
    actions: {
        async fetchApps({commit}, page = 1) {
            const appsRq = await api.applications(page)
            const apps = await appsRq.json()
            commit('updateApps', apps.apps)
            return apps.apps
        },
    },
    mutations: {
        updateApps(state, apps) {
            state.apps = apps
        },
    },
    state: {
        page: 1,
        apps: [],
    },
    getters: {
        allApps: state => state.apps,
        getSettingsApp: state => state.apps.filter((v)=> v.name === "settings")
    }
}