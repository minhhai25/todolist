<template>
  <div>
    <button class="api" @click="getEntries"></button>
  </div>
</template>

<script>
import axios from "axios";
import store from "../store/store";
//import { EventBus } from "../main";
export default {
  methods: {
    getEntries() {
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then(function (response) {
          console.log(response.data.length);
          var arrayAPI = response.data;
          for (var i = 0; i < response.data.length; i++) {
            store.dispatch("setTask", {
              title: arrayAPI[i].title,
              id: arrayAPI[i].id,
            });
          }
          store.dispatch("setCurrentId", response.data.length);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
