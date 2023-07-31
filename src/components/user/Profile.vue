<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="main-container">
    <h1>Thông tin người dùng</h1>
    <div class="container">
      <div class="left-col">
        <img src="./anh1.jpg" alt="" />
        <h3>{{ $store.state.username }}</h3>
      </div>

      <div class="right-col">
        <div class="right-item">
          <label for="email">Email:</label>
          <h3>ntmah@gmil.com</h3>
        </div>
        <div class="right-item">
          <label for="">Quê quán:</label>
          <h3>Bắc Giang</h3>
        </div>
        <div class="right-item">
          <label for="">Số điện thoại:</label>
          <h3>1234567891</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  font-family: cursive;
}
h1 {
  margin: 20px 0px;
}

.container {
  width: 50%;
  display: flex;
  border-radius: 5px;
  background: rgba(208, 195, 195, 0.2);
  padding: 0;
}
.left-col {
  width: 40%;
  /* background-image: linear-gradient(rgb(212, 146, 212), pink); */
  padding: 20px;
}
.left-col > h3 {
  margin-top: 25px;
  margin-bottom: 0 !important;
}
.right-col {
  text-align: center;
  margin-left: 20px;
}
.right-item {
  display: flex;
  text-align: center;
  margin-top: 30px;
}
</style>
