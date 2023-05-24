import Vue from "vue";
import Vuex from "vuex";
// import{ store} from './Store/store.js';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    tasks: [],
  },
  getters: {
    getTaskItem(state) {
      return state.tasks;
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
  },
  actions: {
    setTask(context, newTask) {
      context.commit("SET_TASK", newTask);
    },
    removeTask(context, removedTask) {
      context.commit("REMOVE_TASK", removedTask);
    },
  },
});

export default store;
