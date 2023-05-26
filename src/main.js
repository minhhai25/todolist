import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import store from "./store/store";
import router from "./Router/index";

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
// import Store from "vuex";
// const store = Store({
//   state() {
//     return {
//       count: 0,
//     };
//   },
//   mutations: {
//     increment(state) {
//       state.count++;
//     },
//   },
// });
// App.use(store);

// const store = createStore();
