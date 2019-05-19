<template>
  <v-card
    :class="{ 'height-p100': $vuetify.breakpoint.smAndUp }"
    class="frame"
    flat
  >
    <div class="frame-inner pt-16">
      <v-img
        :src="imageUrl !== null ? imageUrl : '/img/noimage.png'"
        aspect-ratio="1.77"
        class="margin-16 mt-0"
      />

      <v-card-title
        primary-title
        class="pt-0 pr-16 pl-16 pb-0"
      >
        <div>
          <h3 class="headline mb-0">{{ title }}</h3>
        </div>
      </v-card-title>

      <v-card-text class="pl-16 pr-16 pb-16">
        <chip-technology
          v-for="(chip, index) in chips"
          :key="index"
          :src="chip.imageUrl !== null ? chip.imageUrl : '/img/noimage.png'"
          :alt="chip.imageAlt"
        >
          {{ chip.name }}
        </chip-technology>

        <div class="text-xs-right">
          <v-spacer/>
          <v-icon small>update</v-icon> {{ date.replace('T', ' ' ) }}
        </div>

        <div>
          {{ description | stringLimit(100, '...') }}
        </div>
      </v-card-text>
    </div>
  </v-card>
</template>

<script>
import ChipTechnology from '~/components/ChipTechnology.vue'

export default {
  name: 'BlogCard',
  components: {
    ChipTechnology
  },
  props: {
    id: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    imageUrl: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    date: {
      type: String,
      default: null
    },
    chips: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="stylus" scoped>
.date
  position absolute
  bottom 16px
  right 8px
</style>
