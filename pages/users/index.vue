<template>
  <div class="users">
    user list
    <nuxt-link v-for="i in 10" :key="i" :to="`/users/${i}`" class="user" no-prefetch>
      {{ i }}
    </nuxt-link>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  layout: 'mobile',
  head () {
    return {
      title: 'Users'
    }
  }

}
</script>

<style>
.user{
  display: inline-block;
  width: 2rem;
}

</style>
