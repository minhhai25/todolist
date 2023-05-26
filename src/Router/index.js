import Vue from "vue";
import VueRouter from "vue-router";
import HomeComponent from "../components/home.vue";
import LoginComponent from "../components/login.vue";
// import middleware from "../middleware";
// import NewComponent from "../components/NewComponent.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginComponent,
  },

  {
    path: "/todolist",
    name: "todolist",
    component: HomeComponent,

    // meta: { requiresAuth: true },
    // beforeEnter: middleware,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
