<template>
  <section class="container">
    <!-- <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" /> -->
    <h1 v-if="error.statusCode === 404">ページが見つかりませんでした</h1>
    <h1 class="">
      {{ error.statusCode }}
    </h1>
  </section>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
