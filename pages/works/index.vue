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
          key="1"
          data-index="1"
          class="padding-16"
          xs12
          sm6
          md4
        >
          <v-card
            :class="{ 'height-p100': $vuetify.breakpoint.smAndUp }"
            class="frame padding-16"
            flat
          >
            <div class="frame-inner">
              <v-img
                src="/img/massy7124.jpg"
                aspect-ratio="1.77"
                contain
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
                    ちなみに、謎にPWAなので、ホーム画面に置くことが可能です。
                  </div>
                </div>
              </v-card-title>
            </div>
          </v-card>
        </v-flex>

        <v-flex
          key="2"
          data-index="2"
          class="padding-16"
          xs12
          sm6
          md4
        >
          <v-card
            :class="{ 'height-p100': $vuetify.breakpoint.smAndUp }"
            class="frame padding-16"
            flat
          >
            <div class="frame-inner">
              <v-img
                src="/img/resimage-site.png"
                aspect-ratio="1.77"
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
          key="3"
          data-index="3"
          class="padding-16"
          xs12
          sm6
          md4
        >
          <v-card
            :class="{ 'height-p100': $vuetify.breakpoint.smAndUp }"
            class="frame padding-16"
            flat
          >
            <div class="frame-inner">
              <v-img
                src="/img/logo/skype.svg"
                contain
                aspect-ratio="1.77"
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

export default {
  components: {
    ChipTechnology
  },
  methods: {
    beforeEnter(el) {
      el.style.transitionDelay = 150 * parseInt(el.dataset.index) + 'ms'
    }
  },
  transition(to, from) {
    if (!from) return 'slide-left'
    return from.name === 'index' ? 'slide-left' : 'slide-right'
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
