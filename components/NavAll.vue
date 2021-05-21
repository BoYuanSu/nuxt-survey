<template>
  <div>
    <nuxt-link to="/" no-prefetch class="button--grey">home</nuxt-link>
    <router-link to="/about" class="button--grey">about</router-link>
    <nuxt-link to="/users" class="button--grey" no-prefetch>users</nuxt-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.router-link-active {
  color: cadetblue;
}
.nuxt-link-active {
  color: brown;
}
</style>
