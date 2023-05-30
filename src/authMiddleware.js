import store from "./store/store";

export default function loginMiddleware() {
  return (to, from, next) => {
    console.log("todolist");
    const islogin = store.getters.getIsLogin;
    if (islogin) {
      next();
    } else {
      next("/");
    }
  };
}
