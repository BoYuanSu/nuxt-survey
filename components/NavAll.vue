<template>
  <div>
    <nuxt-link to="/" no-prefetch class="button--grey">home</nuxt-link>
    <nuxt-link to="/about" class="button--grey">about</nuxt-link>
    <nuxt-link to="/lifecycle" class="button--grey">lifecycle by <code>nuxt-link</code></nuxt-link>
    <router-link to="/lifecycle" class="button--grey">lifecycle by <code>router-link</code></router-link>
    <a href="javascript:;" @click.prevent="$router.push('/lifecycle')" class="button--grey">lifecycle by a tag</a>

    <nuxt-link to="/users" class="button--grey" no-prefetch>users</nuxt-link>
    <nuxt-link to="/bugs" class="button--grey" no-prefetch>bugs</nuxt-link>
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
