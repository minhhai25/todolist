<!-- eslint-disable vue/valid-template-root -->
<template>
  <button @click="change">change-lang</button>
</template>

<script>
export default {
  name: "change-lang",
  data() {
    return {
      selectedLang: "en",
      options: [
        {
          value: "en",
          label: "English",
        },
        {
          value: "vn",
          label: "Tiếng Việt",
        },
      ],
    };
  },
  watch: {
    selectedLang(payload) {
      this.$i18n.locale = payload;
    },
  },
};
</script>

<style></style>
