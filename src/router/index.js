import {createRouter, createWebHistory} from 'vue-router'
import LoginView from '@/views/LoginView';
import TestView from "@/views/TestView";
import PageNotFound from "@/views/PageNotFound"

const routes = [
    {
        path: '/',
        name: 'login',
        component: LoginView
    },
    {
        path: '/test',
        name: 'test',
        component: TestView
    },
    {
        path: '/home',
        name: 'home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: PageNotFound,
        meta: {
            requiresAuth: false
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to) => {
    if (!localStorage.getItem('token') && to.name !== "login") return {name: 'login'}
})
export default router
