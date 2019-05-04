<template>
  <article class="wrapper">
    <section>
      <transition-group
        name="card-list"
        tag="v-layout"
        class="wrap"
        appear
        @before-enter="beforeEnter"
      >
        <v-flex
          v-for="(blog, index) in blogs"
          :key="blog.id"
          :data-index="index"
          class="padding-8"
          xs12
          sm4
        >
          <nuxt-link :to="{ name: 'blog-id', params: { id: blog.id }}">
            <blog-card
              :id="blog.id"
              :title="blog.title"
              :image-url="`https://${blog.image.fields.file.url}`"
              :description="blog.description"
              :date="blog.date"
              :chips="blog.chips"
            />
          </nuxt-link>
        </v-flex>
      </transition-group>
    </section>
  </article>
</template>

<script>
import BlogCard from '~/components/BlogCard.vue'

export default {
  components: {
    BlogCard
  },
  computed: {
    blogs() {
      return this.$store.state.blogs.blogs
    }
  },
  async asyncData({ store }) {
    if (store.state.blogs.blogs.length) {
      return
    }
    await store.dispatch('blogs/fetchBlogs')
  },
  methods: {
    beforeEnter(el) {
      el.style.transitionDelay = 150 * parseInt(el.dataset.index) + 'ms'
    }
  },
  transition(to, from) {
    if (!from) return 'slide-left'
    else if (from.name.includes('blog-id')) return 'slide-down'
    else if (to.name.includes('blog-id')) return 'slide-up'
    else return from.name !== 'contact' ? 'slide-left' : 'slide-right'
  },
  head() {
    return {
      title: 'Works'
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
