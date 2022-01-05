import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'


Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
            //beforeEnter: requireAuth
        },
        {
            path: '/board',
            name: "BoardView",
            component: () => import('@/views/BoardView.vue'),
        },
        {
            path: "/board/:id",
            name: "BoardDetail",
            component: () => import('@/views/BoardDetail.vue'),
        },
        {
            path: "/add",
            name: "BoardCreate",
            component: () => import('@/views/BoardCreate.vue'),
        },
        {
            path: "/edit/:id",
            name: "BoardEdit",
            component: () => import('@/views/BoardEdit.vue'),
        },
        {
            path: '*',
            name: "NotFound",
            component: () => import('@/views/NotFound.vue'),
        }
    ]
})

export default router


