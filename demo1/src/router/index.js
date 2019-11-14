import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Show from '../views/Show.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect:'/show'        
    }, {
        path: '/home',
        component: Home,
        name: "Home"
    }, {
        path: '/show',
        component: Show,
        name: "Show"
    },

]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router