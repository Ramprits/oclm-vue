<template>
  <router-view />
</template>
<script>
export default {
  created() {
    let user = JSON.parse(localStorage.getItem("@userInformation"));
    let jwt = localStorage.getItem("@userTokenInformation");
    if (user && jwt) {
      this.$store.dispatch("auth/loadUser", { jwt, user });
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
