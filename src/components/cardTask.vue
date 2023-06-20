<template>
  <div class="card-task">
    <ul>
      <li v-for="(task, index) in tasks" :key="task.id">
        <span>{{ task.title }}</span>

        <button @click="deleteTask(index)">
          <i class="el-icon-delete"></i>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    // tasks: Array,
  },
  data() {
    return {
      input: "",
    };
  },
  computed: mapState({
    tasks: (state) => state.tasks,
  }),
  methods: {
    deleteTask(index) {
      this.$store.dispatch("removeTask", index);
      console.log(index);
    },
  },
};
</script>

<style scoped>
li {
  box-sizing: border-box;
  width: 550px;
  height: 142px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25),
    0px 4px 40px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
}
ul {
  list-style: none;
  margin: 29px auto;
  width: 100%;
  padding: 0;
}

i.el-icon-delete {
  color: white;
  font-size: 34px;
}
li {
  margin: 20px auto;
}
span {
  box-sizing: border-box;
  display: inline-block;
  width: 386px;
  height: 60px;

  background: #a8a8a8;
  border: 1px solid #91bec5;
  backdrop-filter: blur(20px);
  border-radius: 40px;
  position: relative;
  top: 20px;
  /* text-align: start; */
}
li > button {
  vertical-align: middle;
  position: relative;
  top: 37px;
  background: rgba(244, 121, 31, 0.92);
  backdrop-filter: blur(20px);
  border-radius: 50%;
}
</style>
