import Vue from "vue"
import VueRouter from "vue-router"


Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '*',
            redirect: '/'
        },
        {
            path: '/',
            name: 'desktop',
            component: () => import('../pages/DesktopPage')
        },
        {
            path: '/calculator',
            name: 'calculator',
            component: () => import('../pages/CalculatorApp')
        },
        {
            path: '/settings',
            name: 'settings',
            component: () => import('../pages/SettingsApp')
        },
        {
            path: '/remindes/:id?',
            name: 'remindes',
            component: () => import('../pages/RemindesAppList'),

        },
        {
            path: '/remindesList/:id?',
            name: 'remindesList',
            component: () => import('../pages/RemindesAppItem'),

        },
        {
            path: '/weather',
            name: 'weather',
            component: () => import('../pages/WeatherApp'),
        },
        {
            path: '/page/:id?',
            name: 'page',
            component: () => import('../pages/NewPage')
        },
        {
            path: '/user',
            name: 'user',
            component: () => import('../pages/UserPage'),
            children: [{path: 'comments', name: 'UserCommnets', component: () => import('../pages/NewPage')}]
        },
    ],
})


