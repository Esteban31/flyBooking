import { createRouter, createWebHistory } from "vue-router";


import Home from "./pages/Home.vue"
import SignIn from "./pages/SignIn.vue"
import SignUp from "./pages/SignUp.vue"

import App from "./pages/App/App.vue"
import Bookings from "./pages/App/Bookings.vue"

const routes = [
  {path: '/', component: Home},
  {path: '/signin', component: SignIn},
  {path: '/signup', component: SignUp},
  {path: '/app', component: App},
  {path: '/booking', component: Bookings}
]


const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
