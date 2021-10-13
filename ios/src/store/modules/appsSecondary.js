export default {
    actions: {
        async fetchAppsSecond({commit}) {
            const appsRq = await fetch(`http://localhost:3000/pages_main`)
            const apps = await appsRq.json()
            commit('updateAppsSecond', apps)
        }
    },
    mutations: {
        updateAppsSecond(state, apps) {
            state.apps = apps
        }
    },
    state: {
        apps: []
    },
    getters: {
        allAppsSecond: state => state.apps,
    }
}