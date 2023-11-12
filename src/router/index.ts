import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import AppLayout from '../layouts/AppLayout.vue';
import Home from '../views/Home/Home.vue';
import Blog from '../views/Blog/Blog.vue';
import Post from '../views/Blog/Post.vue'
import Uses from '../views/Uses/Uses.vue';
import Contact from '../views/Contact/Contact.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/',
        component: AppLayout,
        children: [
            { path: '/', name: 'home', component: Home },
            { path: '/blog', name: 'blog', component: Blog },
            { path: '/blog/:slug', name: 'blog.post', component: Post },
            { path: '/uses', name: 'uses', component: Uses },
            { path: '/contact', name: 'contact', component: Contact },
            // ...
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router