<template>
  <div>
    <header-comp></header-comp>

    <add-comp></add-comp>
    <task-comp></task-comp>
    <get-api></get-api>
  </div>
</template>

<script>
import cardAddVue from "./cardAdd.vue";
import cardTaskVue from "./cardTask.vue";
import Header from "./Header.vue";

import GetApi from "./GetApi.vue";
export default {
  name: "home-page",
  components: {
    "header-comp": Header,
    "add-comp": cardAddVue,
    "task-comp": cardTaskVue,
    GetApi,
  },
};
</script>

<style></style>
