<template>
  <nuxt-link :to="{ name: 'blog-content-id', params: { id: id }}">
    <v-card
      :class="{ 'height-p100': $vuetify.breakpoint.smAndUp }"
      class="frame"
    >
      <div class="frame-inner">
        <v-img
          :src="imageUrl !== null ? imageUrl : '/img/noimage.png'"
          aspect-ratio="1.77"
        />

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ title }}</h3>

            <chip-technology
              v-for="(chip, index) in chips"
              :key="index"
              :src="chip.imageUrl !== null ? chip.imageUrl : '/img/noimage.png'"
              :alt="chip.imageAlt"
            >
              {{ chip.name }}
            </chip-technology>

            <div>
              {{ content | stringLimit(100, '...') }}
            </div>
          </div>
        </v-card-title>

        <v-card-text class="pt-0 pb-0 text-xs-right">
          {{ date }}
        </v-card-text>
      </div>
    </v-card>
  </nuxt-link>
</template>

<script>
import ChipTechnology from '~/components/ChipTechnology.vue'
import VueMarkdown from 'vue-markdown'

export default {
  name: 'BlogCard',
  components: {
    ChipTechnology,
    VueMarkdown
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
    content: {
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
</style>
