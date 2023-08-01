import { createRouter, createWebHistory } from "vue-router";


import Home from "./pages/Home.vue"
import SignIn from "./pages/SignIn.vue"
import SignUp from "./pages/SignUp.vue"

const routes = [
  {path: '/', component: Home},
  {path: '/signin', component: SignIn},
  {path: '/signup', component: SignUp}
]


const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
