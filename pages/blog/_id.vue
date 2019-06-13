<template>
  <article class="wrapper">
    <section>
      <v-layout wrap>
        <v-flex
          v-if="$vuetify.breakpoint.mdAndUp"
          class="padding-8"
          sm3
        >
          <h2 class="pt-0 mb-16">その他の記事</h2>
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
          v-if="blogData"
          :class="{ 'pl-0 pr-0': $vuetify.breakpoint.xsOnly }"
          :sm9="$vuetify.breakpoint.mdAndUp"
          xs12
          class="pl-16 pr-16"
        >
          <h1 class="blog-title">{{ blogData.title }}</h1>

          <div class="text-xs-right">
            <chip-technology
              v-for="(chip, index) in blogData.chips"
              :key="index"
              :src="chip.imageUrl !== null ? chip.imageUrl : '/img/noimage.png'"
              :alt="chip.imageAlt"
            >
              {{ chip.name }}
            </chip-technology>
          </div>

          <p class="text-xs-right">
            <v-icon small>update</v-icon> {{ blogData.date.replace('T', ' ' ) }}
          </p>

          <v-img
            :src="`https://${blogData.image.fields.file.url}`"
            aspect-ratio="1.77"
            contain
            max-height="240px"
          />

          <div
            class="content mt-8 mb-8"
            v-html="richTextToHtmlString(blogData.content)"
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
  async asyncData({ store, route }) {
    if (!store.state.blogs.blogs.length) {
      await store.dispatch('blogs/fetchBlogs')
    }

    let prevId = null
    let nextId = null
    const blogs = store.getters['blogs/list']
    const blogLength = blogs.length
    const filteredBlogs = blogs.filter((blog, index, blogs) => {
      if (blog.id === route.params.id) {
        if (index > 0) {
          prevId = blogs[index - 1].id
        }

        if (index < blogLength - 1) {
          nextId = blogs[index + 1].id
        }

        return false
      }
      return true
    })
    const blogData = store.getters['blogs/getById'](route.params.id)

    return {
      blogs: filteredBlogs,
      blogData: blogData,
      prevId: prevId,
      nextId: nextId
    }
  },
  mounted() {
    this.$el.querySelectorAll('code').forEach(target => {
      hljs.highlightBlock(target)
    })

    window.onkeydown = e => {
      if (e.keyCode == 37) {
        window.onkeydown = null
        if (this.prevId !== null) {
          this.$router.push({ name: 'blog-id', params: { id: this.prevId } })
        } else {
          this.$router.push({ name: 'history' })
        }
      } else if (e.keyCode == 39) {
        window.onkeydown = null
        if (this.nextId !== null) {
          this.$router.push({ name: 'blog-id', params: { id: this.nextId } })
        } else {
          this.$router.push({ name: 'contact' })
        }
      }
    }
  },
  methods: {
    richTextToHtmlString(obj) {
      let htmlString = documentToHtmlString(obj)

      htmlString = htmlString
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&amp;/g, '&')
        .replace(/<p><iframe/g, '<div class="iframe-wrapper"><iframe')
        .replace(/<\/iframe><\/p>/g, '</iframe></div>')
      console.log(htmlString)

      return htmlString
    }
  },
  transition(to, from) {
    if (!from) return 'slide-left'
    else if (from.name === 'blog') return 'slide-up'
    else if (to.name.includes('blog-id')) return 'page'
    else return from.name === 'contact' ? 'slide-right' : 'slide-left'
  },
  head() {
    if (!!this.blogData === false) {
      return {
        title: 'Blog'
      }
    }

    const title = this.blogData.title
    const description = this.blogData.description || null

    if (description !== null) {
      return {
        title: title,
        meta: [
          { hid: 'description', name: 'description', content: description }
        ]
      }
    } else {
      return {
        title: title
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
>>> h2
  padding-top 24px

.blog-title
  font-size 36px

>>> .iframe-wrapper
  position relative
  max-width 100%
>>> .iframe-wrapper:before
  content ""
  display block
  padding-top 56.25%
>>> iframe
  position absolute
  top 0
  left 0
  max-width 100%
  max-height 100%
</style>
