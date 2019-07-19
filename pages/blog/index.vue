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
          :offset-sm3="blogs.length % 2 == 1 && (blogs.length - 1) == index && $vuetify.breakpoint.smOnly"
          :offset-lg2="blogs.length % 3 == 2 && (blogs.length - 2) == index"
          :offset-lg4="blogs.length % 3 == 1 && (blogs.length - 1) == index"
          :class="{ 'pl-0 pr-0': $vuetify.breakpoint.xsOnly }"
          class="padding-16"
          xs12
          sm6
          lg4
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
import Meta from '~/assets/mixins/meta'

export default {
  components: {
    BlogCard
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: 'Blogs',
        description: 'ブログ',
        type: 'article',
        url: 'https://massy7124.me/blog',
        image: 'http://massy7124.me/img/massy7124.jpg'
      }
    }
  },
  async asyncData({ store }) {
    if (store.state.blogs.blogs.length) {
      return
    }
    await store.dispatch('blogs/fetchBlogs')
  },
  computed: {
    blogs() {
      return this.$store.state.blogs.blogs
    }
  },
  mounted() {
    window.onkeydown = e => {
      if (e.keyCode == 37) {
        window.onkeydown = null
        this.$router.push({ name: 'history' })
      } else if (e.keyCode == 39) {
        window.onkeydown = null
        this.$router.push({ name: 'contact' })
      }
    }
  },
  methods: {
    beforeEnter(el) {
      el.style.transitionDelay = 150 + 150 * parseInt(el.dataset.index) + 'ms'
    }
  },
  transition(to, from) {
    if (!from) return 'slide-left'
    else if (from.name.includes('blog-id')) return 'slide-down'
    else if (to.name.includes('blog-id')) return 'slide-up'
    else return from.name !== 'contact' ? 'slide-left' : 'slide-right'
  }
}
</script>

<style lang="stylus" scoped>

</style>
