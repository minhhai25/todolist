import Vue from "vue/dist/vue";
// import Logincomponent from "../src/components/login";
new Vue({
  el: "#test",

  data: {
    content: "Lifecycle Hooks",
    update: "",
    currentActivity: "test",
  },
  beforeCreate: function () {
    console.log("beforeCreate");
    console.log("Lifecycle Hook");
    console.log(this.content);
  },
  created() {
    console.log("created");
    console.log(this.content);
  },
  beforeMount() {
    console.log("before mount");
    console.log(this.$ref.username);
  },
  mounted() {
    console.log("mounted");
    console.log(this.$ref.username);
  },

  beforeDestroy: function () {
    this.content = null;
    delete this.content;
  },
  destroyed: function () {
    console.log(this);
  },
});
