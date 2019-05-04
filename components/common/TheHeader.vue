<template>
  <div id="header">
    <header
      v-if="$vuetify.breakpoint.mdAndUp"
      :class="{ 'is-fixed-top': isFixedTop }"
      class="header-sm-and-up bg-color-main"
    >
      <h1>Massy7124</h1>
      <h2>Web Developer</h2>
      <the-header-navbar :is-fixed-top="isFixedTop"/>
    </header>

    <header
      v-else
      class="header-xs bg-color-main">
      <h1>Massy7124</h1>
      <h2>Web Developer</h2>
    </header>
  </div>
</template>

<script>
import TheHeaderNavbar from '~/components/common/TheHeaderNavbar.vue'

export default {
  name: 'TheHeader',
  components: {
    TheHeaderNavbar
  },
  data() {
    return {
      scrollY: 0,
      isFixedTop: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY
      this.isFixedTop = this.scrollY > 136
    }
  }
}
</script>

<style lang="stylus" scoped>
#header
  position relative
  z-index 9999

.header-sm-and-up
  padding 24px 0px 0px 0px
  text-align center
  color white

  h1
    font-weight 300
    font-size 40px
    margin 0

  h2
    font-weight 300
    font-size 24px
    margin 8px

.header-xs
  padding-top 10px
  padding-bottom 10px
  text-align center
  color white

  h1
    font-weight 100
    font-size 2em
    margin 0

  h2
    font-weight 100
    font-size 1em
    margin 0

.is-fixed-top
  margin-bottom 70px
</style>
