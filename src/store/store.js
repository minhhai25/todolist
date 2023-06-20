import Vue from "vue";
import Vuex from "vuex";
// import{ store} from './Store/store.js';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    tasks: [],
    isLogin: false,
    currentId: null,
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
    // SET_CURRENT_ID(state, currentId) {
    //   state.currentId = currentId;
    // },
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
    // setCurrentId(context, currentId) {
    //   context.commit("SET_CURRENT_ID", currentId);
    // },
  },
});

export default store;
