<template>
  <v-card class="frame card-mini mb-16">
    <div class="frame-inner">
      <v-card-title
        primary-title
        class="padding-8"
      >
        <div>
          <h3 class="mb-0">{{ title | stringLimit(10, '...') }}</h3>

          <chip-technology
            v-if="chips.length !== 0"
            :src="chips[0].imageUrl !== null ? chips[0].imageUrl : '/img/noimage.png'"
            :alt="chips[0].imageAlt"
          >
            {{ chips[0].name }}
          </chip-technology>
        </div>
      </v-card-title>
    </div>
  </v-card>
</template>

<script>
import ChipTechnology from '~/components/ChipTechnology.vue'

export default {
  name: 'BlogCardMini',
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
</style>
