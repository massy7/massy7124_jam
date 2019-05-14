<template>
  <article class="wrapper">
    <section class="timeline">
      <v-timeline :dense="$vuetify.breakpoint.xs">
        <transition-group
          name="timeline"
          appear
          @before-enter="beforeEnter"
        >
          <v-timeline-item
            key="1"
            :data-index="1"
            :class="{ 'to-right': $vuetify.breakpoint.smAndUp }"
            class="now"
            color="#FB5E5E"
          >
            <template v-slot:opposite>
              <span class="headline font-weight-bold color-databeat">
                2019-04
              </span>
            </template>

            <div class="py-3">
              <div
                v-if="$vuetify.breakpoint.xs"
                class="font-weight-bold color-databeat"
              >
                2019-04
              </div>

              <h2 class="headline font-weight-light mb-3 color-databeat">
                <a
                  href="https://www.data-be.at/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="color-databeat"
                >アジト株式会社</a>
              </h2>

              <div>
                Customer Data Platform
                <a
                  href="https://www.data-be.at/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="color-databeat"
                >
                  <b>Databeat</b>
                </a>
                開発チーム<br>
                <chip-technology
                  src="/img/logo/vue.svg"
                  alt="Vue.js"
                >
                  Vue.js
                </chip-technology>
                <chip-technology
                  src="/img/logo/laravel-color.svg"
                  alt="Laravel5"
                >
                  Laravel5
                </chip-technology>
                <chip-technology
                  src="/img/logo/google-bigquery.svg"
                  alt="Google BigQuery"
                >
                  BigQuery
                </chip-technology>
              </div>
            </div>
          </v-timeline-item>

          <v-timeline-item
            key="2"
            :data-index="2"
            color="#0bd688"
            small
          >
            <template v-slot:opposite>
              <span class="headline font-weight-bold color-lycle">
                2018-04
              </span>
            </template>

            <div class="py-3">
              <div
                v-if="$vuetify.breakpoint.xs"
                class="font-weight-bold color-lycle"
              >
                2018-04
              </div>
              <h2 class="headline font-weight-light mb-3 color-techloco">
                <a
                  href="https://www.techloco.co.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="color-techloco"
                >株式会社テクロコ</a>
              </h2>

              <div>
                ローカルSEO支援サービス
                <a
                  href="https://www.lycle.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="color-lycle"
                >
                  <b>Lycle</b>
                </a>
                開発チーム<br>
                <chip-technology
                  src="/img/logo/vue.svg"
                  alt="Vue.js"
                >
                  Vue.js
                </chip-technology>
                <chip-technology
                  src="/img/logo/laravel-color.svg"
                  alt="Laravel5"
                >
                  Laravel5
                </chip-technology>
                <chip-technology
                  src="/img/logo/line.svg"
                  alt="LINE Bot"
                >
                  LINE Bot
                </chip-technology>
              </div>
            </div>
          </v-timeline-item>

          <v-timeline-item
            key="3"
            :data-index="3"
            :class="{ 'to-right': $vuetify.breakpoint.smAndUp }"
            color="#D85252"
            small
          >
            <template v-slot:opposite>
              <span class="headline font-weight-bold color-draft">
                2017-04
              </span>
            </template>

            <div class="py-3">
              <div
                v-if="$vuetify.breakpoint.xs"
                class="font-weight-bold color-draft"
              >
                2017-04
              </div>

              <h2 class="headline font-weight-light mb-3 color-techloco">
                <a
                  href="https://www.techloco.co.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="color-techloco"
                >株式会社テクロコ</a>
              </h2>

              <div>
                Webマーケティング支援プラットフォーム
                <a
                  href="https://www.draft.partners/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="color-draft"
                >
                  <b>Draft</b>
                </a>
                開発チーム<br>
                <chip-technology
                  src="/img/logo/laravel-color.svg"
                  alt="Laravel5"
                >
                  Laravel5
                </chip-technology>
              </div>
            </div>
          </v-timeline-item>

          <v-timeline-item
            key="4"
            :data-index="4"
            color="#01418E"
            small
          >
            <template v-slot:opposite>
              <span class="headline font-weight-bold color-knct">
                2010-04 ~ 2017-03
              </span>
            </template>

            <div class="py-3">
              <div
                v-if="$vuetify.breakpoint.xs"
                class="font-weight-bold color-knct"
              >
                2010-04 ~ 2017-03
              </div>

              <h2 class="headline font-weight-light mb-3 color-knct">
                <a
                  href="http://www.kisarazu.ac.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="color-knct"
                >木更津工業高等専門学校</a>
              </h2>

              <div>
                情報工学科: 2010-04 ~ 2015-03<br>
                制御・情報システム工学専攻科: 2015-04 ~ 2017-03<br>
                <chip-technology
                  src="/img/logo/nit-kc.svg"
                  alt="NIT,KC"
                >
                  NIT,KC
                </chip-technology>
              </div>
            </div>
          </v-timeline-item>
        </transition-group>
      </v-timeline>
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
      el.style.transitionDelay = 300 * parseInt(el.dataset.index) + 'ms'
    }
  },
  transition(to, from) {
    if (!from) return 'slide-left'
    return from.name !== 'index' && from.name !== 'works'
      ? 'slide-right'
      : 'slide-left'
  },
  head() {
    return {
      title: 'History'
    }
  }
}
</script>

<style lang="stylus" scoped>
.timeline
  width 100%

.timeline-enter-active, .timeline-leave-active, .timeline-move
  transition opacity 0.5s, transform 0.5s

.timeline-enter
  opacity 0
  transform translateX(-40px)

  &.to-right
    transform translateX(40px)

.now /deep/.v-timeline-item__dot
    animation Flash 1.5s infinite

@keyframes Flash
  20%
    opacity 0
  40%
    opacity 1
</style>
