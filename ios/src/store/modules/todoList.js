const MUTATION_TYPES = {
    UPDATE_OBJ:'UPDATE_OBJ'
}
export default {
    actions: {
async getObj({commit},obj){
    commit(MUTATION_TYPES.UPDATE_OBJ, obj)
}
    },
    mutations: {
        [MUTATION_TYPES.UPDATE_OBJ](state, obj) {
            state.todoList.push(obj)
        }
    },
    state: {
        todoList: [],
    },
    getters: {
        todoList: state=> state.todoList
    }
}