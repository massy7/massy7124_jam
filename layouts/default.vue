<template>
  <v-app>
    <my-header/>
    <!-- <my-sidebar/> -->
    <nuxt/>
    <my-scroll-top-button/>
    <my-footer/>
  </v-app>
</template>

<script>
import MyHeader from '~/components/common/TheHeader.vue'
import MyFooter from '~/components/common/TheFooter.vue'
import MyScrollTopButton from '~/components/common/TheScrollTopButton.vue'

export default {
  components: {
    MyHeader,
    MyFooter,
    MyScrollTopButton
  }
}
</script>

<style lang="stylus">

</style>
