import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './components/pages/AppHome.vue';
import AppAbout from './components/pages/AppAbout.vue';
import AppServices from './components/pages/AppServices.vue';
import NotFound from './components/pages/NotFound.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
        {
            path: '/services',
            name: 'services',
            component: AppServices
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound
        },
        {
            path: '/trainig',
            name: 'training',
            component: NotFound
        },
        {
            path: '/blogs',
            name: 'blogs',
            component: NotFound
        },


    ]
});
export { router };