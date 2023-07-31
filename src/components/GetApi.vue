<template>
  <div>
    <button @click="getEntries">GetApi</button>
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
  // mounted() {
  //   this.getEntries();
  // },
  methods: {
    ...mapActions(["setTask"]),
    async getEntries() {
      try {
        const response = await axios.get( "https://jsonplaceholder.typicode.com/todos"
        );

        const tasks = response.data.map((task) => ({
          id: task.id,
          title: task.title,
        }));
        tasks.forEach((task) => {
          this.setTask(task);
        });

      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
