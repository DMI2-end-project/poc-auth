import {createRouter, createWebHistory, RouterOptions} from "vue-router";
import Home from "../src/pages/Home.vue";
import Login from "../src/pages/Login.vue";

const config: RouterOptions = {
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login
    }
  ]
}

const router = createRouter(config);

export default router;