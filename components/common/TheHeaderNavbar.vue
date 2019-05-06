<template>
  <nav
    :class="{'fixed-top': isFixedTop}"
    class="bg-color-main"
  >
    <div class="grid-nav">
      <nuxt-link 
        class="button" 
        to="/" 
        exact
      >
        <v-icon>home</v-icon>Home
      </nuxt-link>

      <nuxt-link 
        class="button" 
        to="/works"
      >
        <v-icon>code</v-icon>Works
      </nuxt-link>

      <nuxt-link
        class="button"
        to="/history"
      >
        <v-icon>history</v-icon>History
      </nuxt-link>

      <nuxt-link 
        class="button" 
        to="/blog"
      >
        <v-icon>edit</v-icon>Blog
      </nuxt-link>

      <nuxt-link 
        class="button"
        to="/contact"
      >
        <v-icon>mail</v-icon>Contact
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheHeaderNavbar',
  props: {
    isFixedTop: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="stylus" scoped>
nav
  width 100%

  .grid-nav
    max-width 960px
    margin 0px auto 0 auto
    display grid
    grid-template-rows 1fr
    grid-template-columns 1fr 1fr 1fr 1fr 1fr

  .button,
  .button:visited
    display inline-block
    color white
    letter-spacing 1px
    text-decoration none
    text-transform uppercase
    padding 15px 20px
    margin 0px
    font-size 1.5em

    .theme--light.v-icon
      color white

  .button:hover,
  .button:focus
    color black
    background-color white

    .theme--light.v-icon
      color black

  .button.nuxt-link-active
    color black
    background-color white

    .theme--light.v-icon
      color black

  &.fixed-top
    position fixed
    max-width 100%
    margin-top 0px
    top 0px
    // left 0
    z-index 100

.v-icon
    position relative
    top 4px
    vertical-align unset
</style>
