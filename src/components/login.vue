<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="home">
    <form @submit.prevent="Login" id="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button type="submit">Login</button>
      <!-- <p class="errorMessage">{{ errorMessage }}</p> -->
    </form>
  </div>
</template>

<script>
// import authMiddleware from "../authMiddleware";
import router from "../Router/index";
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
      if (this.username === "admin" && this.password === "123456") {
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

<style>
#login {
  box-sizing: border-box;
  border: 1px solid;
  border-radius: 5px;
  width: 500px;
  background: white;
  height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
}

#home {
  display: flex;
  justify-content: center;
}
</style>
