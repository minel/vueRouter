import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Bar from './views/Bar.vue';
import UserProfile from './views/UserProfile.vue';
import UserPosts from './views/UserPosts.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/bar',
      name: 'bar',
      component: Bar,
    },
    {
      path: '/user/:id',
      name: 'profile',
      component: UserProfile,
    },
    {
      path: '/user/:id/posts',
      name: 'posts',
      component: UserPosts,
    },
  ],
  mode: 'hash',
});

// mode can be changeable
