<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="home">
    <form @submit.prevent="login" id="login">
      <div>
        <label for=" username">Username:</label>
        <input type=" username" id=" username" v-model="username" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button type="submit">Login</button>
      <p type="errorMessage">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    login() {
      if (this.password == "123456" && this.username == "admin") {
        this.$router.push({ path: "/todolist" });
        console.log("dang nhap thanh cong");
      } else {
        console.log("dang nhap sai");
        this.errorMessage = "Mật khẩu hoặc tên đăng nhập sai .Hãy nhập lại!";
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
