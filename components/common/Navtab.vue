<template>
  <nav>
    <nuxt-link 
      class="button" 
      to="/" 
      exact
    >
      <v-icon>home</v-icon><br>Home
    </nuxt-link>

    <nuxt-link 
      class="button" 
      to="/works"
    >
      <v-icon>code</v-icon><br>Works
    </nuxt-link>

    <nuxt-link
      class="button"
      to="/history"
    >
      <v-icon>history</v-icon><br>History
    </nuxt-link>

    <nuxt-link 
      class="button" 
      to="/blog/1"
    >
      <v-icon>edit</v-icon><br>Blog
    </nuxt-link>

    <nuxt-link 
      class="button"
      to="/contact"
    >
      <v-icon>mail</v-icon><br>Contact
    </nuxt-link>
  </nav>
</template>

<script>
export default {
  name: 'Navtab'
}
</script>

<style lang="stylus" scoped>
nav
  width 100vw
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
    padding 6px 0px
    margin 0px
    font-size 1em

    @media (max-width 374px)
      font-size 0

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
</style>
