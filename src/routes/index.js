import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const router = new VueRouter({
    routes: [
        {
            path: "/",
            component: () => import('@/view/home')
        },
        {
            path: "/user",
            component: () => import('@/view/user/userlist')
        }
    ]
})


export default router
