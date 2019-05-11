<template>
  <v-chip
    outline
    disabled
  >
    <v-avatar
      v-if="src !== null"
      :class="{ 'mr-0 ml-0': !hasSlot }"
      tile
      class="chip-icon"
    >
      <img
        :src="src"
        :alt="alt"
      >
    </v-avatar>
    <slot/>
  </v-chip>
</template>

<script>
export default {
  name: 'ChipTechnology',
  props: {
    src: {
      type: String,
      default: null
    },
    alt: {
      type: String,
      default: null
    }
  },
  computed: {
    hasSlot() {
      return !!this.$slots.default
    }
  }
}
</script>

<style lang="stylus" scoped>
.v-chip.v-chip.v-chip--outline
  height 28px

.v-chip.v-chip.v-chip--outline .v-avatar
  margin-left -4px
  margin-right 4px
  height 20px !important
</style>
