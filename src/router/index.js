import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Holidays from "../views/Holidays";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/holidays',
        name: 'Holidays',
        component: Holidays
    }
]

const router = new VueRouter({
    routes
})

export default router
