<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="home">
    <form @submit.prevent="Login" id="login">
      <p>Log In</p>
      <div class="ip_login">
        <!-- <label for="username">Username:</label> -->
        <input
          type="text"
          placeholder="username"
          id="username"
          v-model="username"
        />
        <!-- <label for="password">Password:</label> -->
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="password"
        />
      </div>
      <button type="submit" id="login">Login</button>
      <!-- <p class="errorMessage">{{ errorMessage }}</p> -->
    </form>
  </div>
</template>

<script>
// import authMiddleware from "../authMiddleware";
import router from "../Router/index";
import "../assets/login.css";
export default {
  data() {
    return {
      username: "",
      password: "",
      // errorMessage: "",
    };
  },
  methods: {
    Login() {
      if (this.username === "admin" && this.password === "111") {
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
