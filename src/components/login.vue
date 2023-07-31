<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="home">
    <form @submit.prevent="Login" id="login">
      <p>Log In</p>
      <div class="ip_login">
        <input
          type="text"
          placeholder="username"
          id="username"
          ref="username"
          v-model="username"
        />
        <input
          type="password"
          id="password"
          ref="password"
          v-model="password"
          placeholder="password"
        />
      </div>
      <button type="submit" id="login">Login</button>
      <div id="test">{{ content }}</div>
    </form>
  </div>
</template>

<script>
import router from "../Router/index";
import "../assets/login.css";
// import "../test";
export default {
  data() {
    return {
      password: "",
      username: "",
      content: "Lifecycle Hooks",
    };
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
    // console.log(this.$refs);
    console.log(this.$refs.username);
    // console.log(document.querySelector("#test").innerHTML);
  },
  mounted() {
    console.log("mounted");
    // console.log(this.$ref.username);
    console.log(this.$refs.username);
    // console.log(document.getElementById("test").innerHTML);
  },

  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy: function () {
    this.content = null;
    delete this.content;
  },
  destroyed: function () {
    console.log(this);
  },
  methods: {
    Login() {
      if (
        this.$store.dispatch("setusername", "super admin") &&
        this.password === "111"
      ) {
        this.$store.dispatch("login");
        console.log("oke");
        router.push("/todolist");
      } else {
        alert("đăng nhập thất bại ");
      }
    },
  },
};
</script>

<style></style>
