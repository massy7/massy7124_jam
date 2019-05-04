<template>
  <v-btn
    v-if="isButtonEnable"
    fab
    small
    color="deepskyblue"
    class="return-top"
    @click="scrollTop('#header', 500, options)"
  >
    <v-icon dark>keyboard_arrow_up</v-icon>
  </v-btn>
</template>

<script>
import VueScrollTo from 'vue-scrollto'

export default {
  data() {
    return {
      scrollY: 0,
      isButtonEnable: false,
      options: {
        easing: 'ease-out',
        offset: -60,
        cancelable: true,
        x: false,
        y: true
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY
      this.isButtonEnable = this.scrollY > 200
    },
    scrollTop(element, duration, options) {
      VueScrollTo.scrollTo(element, duration, options)
    }
  }
}
</script>

<style lang="stylus" scoped>
.return-top
  position fixed
  bottom 64px
  right 20px
  z-index 100

  font-size 15px
  line-height 40px
  text-align center

  color deepskyblue
  background-color #fff
  width 40px
  height 40px
  border-radius 20px
  cursor pointer
  transition 0.5s
  box-shadow 0 0 6px rgba(0, 0, 0, 0.3)
</style>
