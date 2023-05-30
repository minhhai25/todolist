<template>
  <div class="task-container">
    <div class="task">
      <form v-on:submit.prevent="addNewTask">
        <label for="new-todo">Task</label>
        <input v-model="input" id="new-todo" placeholder="vue2,vue3,..." />

        <button>
          <i class="el-icon-plus"></i>
        </button>
      </form>
    </div>
    <!-- <card-task :tasks="tasks"></card-task> -->
  </div>
</template>

<script>
// import { mapState } from "vuex";
export default {
  name: "task-item",
  components: {},
  //computed nhan value tu store ,task() cos value - data.tasks trong store
  // computed: mapState({
  //   tasks: (state) => state.tasks,
  // }),
  data() {
    return {
      input: "",
      // tasks: [],
      nextTodoId: 0,
    };
  },
  methods: {
    addNewTask: function () {
      if (this.input.trim(" ") == "") {
        console.log("error");
      } else {
        this.$store.dispatch("setTask", {
          id: this.nextTodoId++,
          title: this.input,
        });
        this.input = "";
      }
    },
  },
};
</script>

<style>
.task {
  margin: auto;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25),
    0px 4px 40px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  box-sizing: border-box;
  width: 550px;
  height: 142px;
  display: flex;
  justify-content: center;
}
div {
  align-items: center;
}

input#new-todo {
  background: #ffffff;
  border: 1px solid #91bec5;
  backdrop-filter: blur(20px);
  border-radius: 40px;
  width: 300px;
  height: 60px;
  margin-left: 10px;
  text-align: center;
}
button {
  background: rgba(76, 207, 169, 0.92);
  backdrop-filter: blur(20px);
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  margin-left: 20px;
  vertical-align: bottom;
}
i.el-icon-plus {
  color: white;
  font-size: 43px;

  /* width: 100%; */
}
</style>
