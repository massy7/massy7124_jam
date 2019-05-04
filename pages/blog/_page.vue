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
          <blog-card
            :id="blog.id"
            :title="blog.title"
            :image-url="blog.imageUrl"
            :content="blog.content"
            :date="blog.date"
            :chips="blog.chips"
          />
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
  data() {
    return {
      blogs: [
        {
          id: '2019-05-01-1',
          title: 'タイトル1',
          imageUrl: null,
          content:
            '#コンテンツ1コンテンツ1コンテンツ1コンテンツ1コンテンツ1コンテンツ1コンテンツ1コンテンツ1コンテンツ1コンテンツ1コンテンツ1コンテンツ1コンテンツ1コンテンツ1コンテンツ1コンテンツ1コンテンツ1',
          date: '2019-05-01',
          chips: [
            {
              name: 'Nuxt.js',
              imageUrl: '/img/logo/nuxt.svg',
              imageAlt: 'Nuxt.js'
            },
            {
              name: 'Nuxt.js',
              imageUrl: '/img/logo/nuxt.svg',
              imageAlt: 'Nuxt.js'
            }
          ]
        },
        {
          id: '2019-05-02-1',
          title: 'タイトル2',
          imageUrl: null,
          content:
            'コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2',
          date: '2019-05-02',
          chips: [
            {
              name: 'Nuxt.js',
              imageUrl: '/img/logo/nuxt.svg',
              imageAlt: 'Nuxt.js'
            },
            {
              name: 'Nuxt.js',
              imageUrl: '/img/logo/nuxt.svg',
              imageAlt: 'Nuxt.js'
            }
          ]
        },
        {
          id: '2019-05-02-2',
          title: 'タイトル2',
          imageUrl: null,
          content:
            'コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2',
          date: '2019-05-02',
          chips: [
            {
              name: 'Nuxt.js',
              imageUrl: '/img/logo/nuxt.svg',
              imageAlt: 'Nuxt.js'
            },
            {
              name: 'Nuxt.js',
              imageUrl: '/img/logo/nuxt.svg',
              imageAlt: 'Nuxt.js'
            }
          ]
        },
        {
          id: '2019-05-03-1',
          title: 'タイトル2',
          imageUrl: null,
          content:
            'コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2コンテンツ2',
          date: '2019-05-03',
          chips: [
            {
              name: 'Nuxt.js',
              imageUrl: '/img/logo/nuxt.svg',
              imageAlt: 'Nuxt.js'
            },
            {
              name: 'Nuxt.js',
              imageUrl: '/img/logo/nuxt.svg',
              imageAlt: 'Nuxt.js'
            }
          ]
        }
      ]
    }
  },
  methods: {
    beforeEnter(el) {
      el.style.transitionDelay = 150 * parseInt(el.dataset.index) + 'ms'
    }
  },
  transition(to, from) {
    if (!from) return 'slide-left'
    return from.name !== 'contact' ? 'slide-left' : 'slide-right'
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
