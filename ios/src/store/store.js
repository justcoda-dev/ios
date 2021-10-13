import Vue from 'vue'
import Vuex from 'vuex'
import apps from './modules/apps'
import bar from './modules/bar'
import bg from './modules/bg'
import pages from './modules/pages'
import pagesSecond from './modules/appsSecondary'
import weather from "./modules/weather";
import todoList from "./modules/todoList";
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        apps,
        bar,
        bg,
        pages,
        pagesSecond,
        weather,
        todoList
    }
})