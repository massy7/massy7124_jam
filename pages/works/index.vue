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
          key="0"
          :class="{ 'pl-0 pr-0': $vuetify.breakpoint.xsOnly }"
          data-index="0"
          class="padding-16"
          xs12
          sm6
          lg4
        >
          <v-card
            :class="{ 'height-p100': $vuetify.breakpoint.smAndUp }"
            class="frame"
            flat
          >
            <div class="frame-inner pt-16">
              <v-img
                src="/img/massy7124.jpg"
                aspect-ratio="1.77"
                contain
                class="margin-16 mt-0"
              />

              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Massy7124's Portfolio</h3>

                  <chip-technology
                    src="/img/logo/nuxt.svg"
                    alt="Nuxt.js"
                  >
                    Nuxt.js
                  </chip-technology>
                  <chip-technology
                    src="/img/logo/netlify.svg"
                    alt="Netlify"
                  >
                    Netlify
                  </chip-technology>
                  <chip-technology
                    src="/img/logo/contentful.svg"
                    alt="Contentful"
                  >
                    Contentful
                  </chip-technology>
                  <chip-technology
                    src="/img/logo/pwa.svg"
                    alt="PWA"
                  />

                  <div>
                    こちらのサイトは、Nuxt.js (Front)、Netlify (Server)、Contentful(CMS)、で構成されています。<br>
                    Contentfulは<nuxt-link :to="{ name: 'blog' }"><span class="color-main">Blog</span></nuxt-link>で活用しています。<br>
                    ちなみに、謎にPWAなので、ホーム画面に置くことが可能です。また、矢印キーでも移動できます。
                  </div>
                </div>
              </v-card-title>
            </div>
          </v-card>
        </v-flex>

        <v-flex
          key="1"
          :class="{ 'pl-0 pr-0': $vuetify.breakpoint.xsOnly }"
          data-index="1"
          class="padding-16"
          xs12
          sm6
          lg4
        >
          <v-card
            :class="{ 'height-p100': $vuetify.breakpoint.smAndUp }"
            class="frame"
            flat
          >
            <div class="frame-inner pt-16">
              <v-img
                src="/img/resimage-site.png"
                aspect-ratio="1.77"
                contain
                class="margin-16 mt-0"
              />

              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">使える画像検索</h3>

                  <chip-technology
                    src="/img/logo/cakephp.svg"
                    alt="CakePHP3"
                  >
                    CakePHP3
                  </chip-technology>
                  <chip-technology
                    src="/img/logo/jquery.svg"
                    alt="jquery"
                  >
                    jquery
                  </chip-technology>
                  <chip-technology
                    src="/img/logo/mysql-logo.svg"
                    alt="MySQL"
                  >
                    MySQL
                  </chip-technology>

                  <div>
                    学生の頃に作った、Twitter上で漫画やアニメ、ネタ画像などを用いて会話をする時に使える画像を投稿するサービスです。<br>
                    画像のタグ付けや検索、お気に入り、マイページなどを用意して自分好みの画像を探しやすくしました。
                  </div>
                </div>
              </v-card-title>
            </div>
          </v-card>
        </v-flex>

        <v-flex
          key="2"
          :offset-sm3="$vuetify.breakpoint.mdAndDown"
          :class="{ 'pl-0 pr-0': $vuetify.breakpoint.xsOnly }"
          data-index="2"
          class="padding-16"
          xs12
          sm6
          lg4
        >
          <v-card
            :class="{ 'height-p100': $vuetify.breakpoint.smAndUp }"
            class="frame"
            flat
          >
            <div class="frame-inner pt-16">
              <v-img
                src="/img/logo/skype.svg"
                contain
                aspect-ratio="1.77"
                class="margin-16 mt-0"
              />

              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Skype自動応答スクリプト</h3>

                  <chip-technology>
                    Windows Script Host
                  </chip-technology>
                  <chip-technology>
                    NLP
                  </chip-technology>
                  <chip-technology>
                    JUMAN
                  </chip-technology>

                  <div>
                    Skypeのchatbotです。<br>
                    botに「webとは何ですか」のように質問すると、Wikipediaベースで答えを返してくれます。<br>
                    また、Minecraftというゲームのサーバーを起動できるコマンドなども用意し、<br>
                    私が席を外しているときでも他の人が私のPCのサーバーを起動することができるようになっています。
                  </div>
                </div>
              </v-card-title>
            </div>
          </v-card>
        </v-flex>
      </transition-group>
    </section>
  </article>
</template>

<script>
import ChipTechnology from '~/components/ChipTechnology.vue'
import Meta from '~/assets/mixins/meta'

export default {
  components: {
    ChipTechnology
  },
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: 'Works',
        description: '作ったもの',
        type: 'product',
        url: 'https://massy7124.me/works',
        image: 'http://massy7124.me/img/massy7124.jpg'
      }
    }
  },
  mounted() {
    window.onkeydown = e => {
      if (e.keyCode == 37) {
        window.onkeydown = null
        this.$router.push({ name: 'index' })
      } else if (e.keyCode == 39) {
        window.onkeydown = null
        this.$router.push({ name: 'history' })
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
    return from.name === 'index' ? 'slide-left' : 'slide-right'
  }
}
</script>

<style lang="stylus" scoped>
</style>
