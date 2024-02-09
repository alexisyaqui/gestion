import {createRouter, createWebHistory} from 'vue-router'

import Inicio from '../views/Inicio.vue'
import Login from '../views/Login.vue'

const routes = [
    {
        path: '/inicio',
        name: 'inicio',
        component:  Inicio
    },

    {
        path: '/login',
        name: 'login',
        component: Login

    }

] 

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router