import Vue from "vue";
import Vuex from "vuex";
// import{ store} from './Store/store.js';
Vue.use(Vuex);
// localStorage.setItem("username", this.$store.state.username);
const store = new Vuex.Store({
  state: {
    tasks: [],
    isLogin: false,
    currentId: null,
    username: localStorage.getItem("username") || "",
  },
  getters: {
    getTaskItem(state) {
      return state.tasks;
    },
    getIsLogin(state) {
      return state.isLogin;
    },
  },
  mutations: {
    SET_TASK(state, newTask) {
      state.tasks.push(newTask);
      console.log(state.tasks);
    },
    REMOVE_TASK(state, removedTask) {
      state.tasks.splice(removedTask, 1);
    },
    setLoginStatus(state, status) {
      state.isLogin = status;
    },
    SET_USERNAME(state, username) {
      state.username = username;
    },
  },
  actions: {
    setTask(context, newTask) {
      context.commit("SET_TASK", newTask);
    },
    removeTask(context, removedTask) {
      context.commit("REMOVE_TASK", removedTask);
    },
    login({ commit }) {
      commit("setLoginStatus", true);
    },
    logout({ commit }) {
      commit("setLoginStatus", false);
    },

    setusername({ commit }, username) {
      commit("SET_USERNAME", username);
    },
  },
});

export default store;
