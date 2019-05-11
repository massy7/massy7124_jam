<template>
  <footer
    :class="{ 'fixed-bottom': $vuetify.breakpoint.smAndDown }"
    class="bg-color-main"
  >
    <my-navtab v-if="$vuetify.breakpoint.smAndDown" />

    <span
      v-else
      class="copyright"
    >
      <v-icon
        color="white"
        size="16"
      >
        copyright
      </v-icon> 2019 Koki Mashiko
    </span>
  </footer>
</template>

<script>
import MyNavtab from '~/components/common/Navtab.vue'

export default {
  components: {
    MyNavtab
  }
}
</script>

<style lang="stylus" scoped>
footer
  width 100vw
  text-align center
  color white

  a
    color white

.copyright
  color white
  font-size 16px

.v-icon
  position relative
  top 2px
  vertical-align unset
</style>
