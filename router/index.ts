import {createRouter, createWebHistory, RouterOptions} from "vue-router";
import Home from "../src/pages/Home.vue";
import Login from "../src/pages/Login.vue";
import Dashboard from "../src/pages/Dashboard.vue";
import Game from "../src/pages/Game.vue";

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
    },
    {
      path: '/dashboard',
      component: Dashboard
    },
    {
      path: '/game',
      component: Game
    }
  ]
}

const router = createRouter(config);

export default router;