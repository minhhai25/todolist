import Vue from "vue";
import VueRouter from "vue-router";
import HomeComponent from "../components/home.vue";
import LoginComponent from "../components/login.vue";
import store from "../store/store";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginComponent,
    },
    {
      path: "/todolist",
      name: "todolist",
      component: HomeComponent,
      // Sử dụng middleware authMiddleware cho route này
      beforeEnter: (to, from, next) => {
        console.log("todolist");
        const islogin = store.getters.getIsLogin;
        if (islogin) {
          next();
        } else {
          next("/");
        }
      },
    },
  ],
});

export default router;
