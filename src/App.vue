<template>
  <div id="app">
    <div class="overlay">
      <router-link to="/"></router-link>
      <router-view></router-view>
    </div>
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
.overlay {
  overflow: scroll;
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* rgba(0, 0, 0, 0.2) */
  /* background-color: ; */
  z-index: 2;
}
</style>
