<template>
  <div class="mobile">
    <NavAll />
    <Nuxt />
  </div>
</template>

<script>
import NavAll from '@/components/NavAll'

export default {
  components: {
    NavAll
  }
}
</script>

<style>
.mobile {
  max-width: 640px;
  background-color: azure;
  margin: auto;
}
</style>
