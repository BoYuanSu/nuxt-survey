<template>
  <div>
    <nuxt-link to="/" no-prefetch class="button--grey">
      home
    </nuxt-link>
    <nuxt-link to="/store" class="button--grey">
      store
    </nuxt-link>
    <nuxt-link to="/lifecycle" class="button--grey">
      lifecycle by <code>nuxt-link</code>
    </nuxt-link>
    <router-link to="/lifecycle" class="button--grey">
      lifecycle by <code>router-link</code>
    </router-link>
    <a href="javascript:;" class="button--grey" @click.prevent="$router.push('/lifecycle')">lifecycle by a tag</a>

    <nuxt-link to="/users" class="button--grey" no-prefetch>
      users
    </nuxt-link>
    <nuxt-link to="/bugs" class="button--grey" no-prefetch>
      bugs
    </nuxt-link>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.router-link-active {
  color: cadetblue;
}
.nuxt-link-active {
  color: brown;
}
</style>
