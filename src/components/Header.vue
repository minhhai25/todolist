<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="header-container">
    <div class="logo">
      <img :src="require('../assets/image/MinhHai2.png')" />
    </div>
    <div class="nav-info">
      <div class="about">About</div>
      <div class="conect">Connect</div>
      <div class="project">Project</div>
    </div>
    <div class="dropdown user">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {{ setAvatar }}
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" @click="Logout()">Logout</a></li>
        <li><a class="dropdown-item" @click="Profile()">Profile</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    
    };
  },
  computed: {
    setAvatar() {
      console.log(this.$store.state.username);
      var arr = this.$store.state.username.split(" ");
      var firstLetter = arr.map(function (string) {
        return string.charAt(0).toUpperCase();
      });

      return firstLetter.join("");
    },
  },
  methods: {
    Logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
    Profile() {
      this.$router.push("/profile");
    },
  },
};
</script>

<style scoped>
.header-container {
  display: flex;
  height: 60px;
  position: relative;
  margin-bottom: 50px;
  background: rgba(0, 0, 0, 0.2);
}
img {
  display: flex;
  justify-content: start;
  position: absolute;
  height: 100%;
  top: 0;
  border-radius: 10px;
}
.user {
  position: absolute;
  right: 19px;
  top: 12px;
  border: none;
  border-radius: 15px;
  margin: 0;
  padding: 0;
}
.btn-secondary {
  position: relative;
  border: none;
  border-radius: 50%;
  background: purple;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-secondary :focus {
  background: none !important;
}

.dropdown-toggle::after {
  display: none !important;
}

.nav-info {
  display: flex;
  justify-content: space-around;
  position: absolute;

  width: 20%;
  left: 400px;
}
</style>
