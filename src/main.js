import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import store from "./store/store";
import router from "./Router/index";
import BootstrapVue from "bootstrap-vue";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/js/bootstrap.js";
// import i18n from "./assets/image"
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
