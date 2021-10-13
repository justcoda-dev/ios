import api from "../../api";

const MUTATION_TYPES = {
    UPDATE_PAGES: 'UPDATE_PAGES'
};

export default {
    actions: {
        async fetchPage({commit}) {
            const pages = await api.pages()
            const page = await pages.json()
            commit(MUTATION_TYPES.UPDATE_PAGES, page)
        }
    },
    mutations: {
        [MUTATION_TYPES.UPDATE_PAGES](state, pages) {
            state.pages = pages
        }
    },
    state: {
        pages: 1,
    },
    getters: {
        getPages: state => state.pages
    }
}