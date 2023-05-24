<template>
  <div id="app">
    <h1>To Do List</h1>
    <Add> </Add>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Add from "./components/cardAdd.vue";
export default {
  name: "App",
  components: {
    Add,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html {
  background: linear-gradient(
    180deg,
    #2ebf91 0%,
    rgba(131, 96, 195, 0.31) 100%
  );
  height: 100%;
}
</style>
