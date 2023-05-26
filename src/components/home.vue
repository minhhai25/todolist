<template>
  <div>
    <button type="submit" @click="logout()" id="logout">Logout</button>
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
  methods: {
    logout() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style>
button#logout {
  position: absolute;
  right: 40px;
  top: 19px;
  border: none;
  border-radius: 15px;
  margin: 0;
  padding: 0;
}
</style>
