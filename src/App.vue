<template>
  <div id="app">
    <router-link to="/"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
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
  text-align: center;
}
</style>
