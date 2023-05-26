<template>
  <div>
    <add-comp></add-comp>
    <task-comp></task-comp>
  </div>
</template>

<script>
import cardAddVue from "./cardAdd.vue";
import cardTaskVue from "./cardTask.vue";
export default {
  name: "home-page",
  components: {
    "add-comp": cardAddVue,
    "task-comp": cardTaskVue,
  },
};
</script>

<style></style>
