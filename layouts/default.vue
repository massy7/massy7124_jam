<template>
  <v-app>
    <my-header/>
    <!-- <my-sidebar/> -->
    <nuxt/>
    <my-footer/>
  </v-app>
</template>

<script>
import MyHeader from '~/components/common/TheHeader.vue'
import MyFooter from '~/components/common/TheFooter.vue'

export default {
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style lang="stylus">

</style>
