<template>
  <article class="wrapper">
    <section>
      <v-layout wrap>
        <v-flex
          v-if="$vuetify.breakpoint.mdAndUp"
          class="padding-8"
          sm3
        >
          <nuxt-link
            v-for="(blog, index) in blogs"
            :key="blog.id"
            :data-index="index"
            :to="`/blog/${blog.id}`"
          >
            <blog-card-mini
              :id="blog.id"
              :title="blog.title"
              :image-url="`https://${blog.image.fields.file.url}`"
              :description="blog.description"
              :date="blog.date"
              :chips="blog.chips"
            />
          </nuxt-link>
        </v-flex>

        <v-flex
          :sm9="$vuetify.breakpoint.mdAndUp"
          xs12
          class="pt-8 pl-16 pr-16"
        >
          <h1 class="blog-title">{{ data.title }}</h1>

          <div class="text-xs-right">
            <chip-technology
              v-for="(chip, index) in data.chips"
              :key="index"
              :src="chip.imageUrl !== null ? chip.imageUrl : '/img/noimage.png'"
              :alt="chip.imageAlt"
            >
              {{ chip.name }}
            </chip-technology>
          </div>

          <p class="text-xs-right">
            <v-icon small>update</v-icon> {{ data.date.replace('T', ' ' ) }}
          </p>

          <v-img
            :src="`https://${data.image.fields.file.url}`"
            aspect-ratio="1.77"
            contain
            max-height="240px"
          />

          <div
            class="content mt-8 mb-8"
            v-html="richTextToHtmlString(data.content)"
          />
        </v-flex>
      </v-layout>
    </section>
  </article>
</template>

<script>
import BlogCardMini from '~/components/BlogCardMini.vue'
import ChipTechnology from '~/components/ChipTechnology.vue'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import hljs from 'highlight.js'

const config = require('../../config/production.json')

export default {
  components: {
    BlogCardMini,
    ChipTechnology
  },
  data() {
    return {
      content: null
    }
  },
  computed: {
    blogs() {
      return this.$store.state.blogs.blogs.filter(
        blog => blog.id !== this.$route.params.id
      )
    },
    data() {
      return this.$store.getters['blogs/getById'](this.$route.params.id)
    }
  },
  async asyncData({ store }) {
    if (store.state.blogs.blogs.length) {
      return
    }
    await store.dispatch('blogs/fetchBlogs')
  },
  mounted() {
    let targets = this.$el.querySelectorAll('code')
    targets.forEach(target => {
      hljs.highlightBlock(target)
    })
  },
  methods: {
    richTextToHtmlString(obj) {
      return documentToHtmlString(obj)
    }
  },
  transition(to, from) {
    if (!from) return 'slide-left'
    else if (from.name.includes('blog-id')) return 'slide-down'
    else if (to.name.includes('blog-id')) return 'slide-up'
    else return from.name === 'contact' ? 'slide-right' : 'slide-left'
  },
  head() {
    return {
      title: 'Blog'
    }
  }
}
</script>

<style lang="stylus" scoped>
>>> h2
  padding-top 24px

.blog-title
  font-size 36px
</style>
