<template>
  <div>
    <!-- <ul>
      <li v-for="task in tasks" :key="task.id">{{ task.title }}</li>
    </ul> -->
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
  },
  mounted() {
    this.getEntries();
  },
  methods: {
    ...mapActions(["setTask"]),
    getEntries() {
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
          const tasks = response.data.map((task) => ({
            id: task.id,
            title: task.title,
          }));
          tasks.forEach((task) => {
            this.setTask(task);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
