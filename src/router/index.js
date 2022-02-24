import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/SelectPrice',
    name: 'SelectPrice',
    component: () => import('../views/SelectPrice.vue'),
  },
  {
    path: '/CheckOut',
    name: 'CheckOut',
    component: () => import('../views/CheckOut.vue'),
  },
  {
    path: '/Output',
    name: 'Output',
    component: () => import('../views/Output.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
