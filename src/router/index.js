import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import BoardDetail from '@/views/BoardDetail.vue'
import BoardCreate from '@/views/BoardCreate.vue'
import BoardEdit from '@/views/BoardEdit.vue'
import BoardView from '@/views/BoardView.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            //component: () => import('@/views/Home.vue'),
            component: Home,
            //beforeEnter: requireAuth
        },
        {
            path: '/board',
            name: "BoardView",
            component: BoardView,
            //component: () => import('@/views/BoardView.vue'),
        },
        {
            path: "/board/:id",
            name: "BoardDetail",
            component: BoardDetail,
            //component: () => import('@/views/BoardDetail.vue'),
        },
        {
            path: "/add",
            name: "BoardCreate",
            component: BoardCreate,
            //component: () => import('@/views/BoardCreate.vue'),
        },
        {
            path: "/edit/:id",
            name: "BoardEdit",
            component: BoardEdit,
            //component: () => import('@/views/BoardEdit.vue'),
        },
        {
            path: '*',
            name: "NotFound",
            component: NotFound,
            //component: () => import('@/views/NotFound.vue'),
        }
    ]
})

export default router


