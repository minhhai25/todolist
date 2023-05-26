<!-- eslint-disable vue/multi-word-component-names -->
<template>
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
    <p type="errorMessage">{errorMessage}</p>
  </form>
</template>

<script>
// import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      if (this.password == "123456" && this.username == "admin") {
        this.$router.push({ path: "/todolist" });
        console.log("dang nhap thanh cong");
      } else {
        console.log("dang nhap sai");
      }
    },
    // login() {
    //   axios
    //     .post("/login", {
    //       email: this.email,
    //       password: this.password,
    //     })
    //     .then((response) => {
    //       if (response.data.success) {
    //         window.location.href = "/dashboard";
    //       } else {
    //         //đăng nhập thất bại xử lý thông báo lỗi
    //         console.log("dng nhap lai");
    //       }
    //     })
    //     .catch((error) => {
    //       //xử lí lỗi
    //       console.log(error);
    //     });
    // },
  },
};
</script>

<style>
#login {
  box-sizing: border-box;
  border: 1px solid;
  border-radius: 5px;
}
</style>
