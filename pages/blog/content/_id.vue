<template>
  <article class="wrapper">
    <el-collapse 
      v-model="detailId" 
      class="blog">
      <el-collapse-item 
        v-for="(blog, index) in blogs" 
        :key="index" 
        :name="blog._id">
        <template slot="title">
          <div style="position:relative;">
            <div class="blog-title">
              {{ blog.title }}
            </div>
            <div 
              class="hidden-xs-only blog-date" 
              style="position:absolute; top:0px; right:36px;"><el-tag 
                v-if="blog.tags[0]" 
                size="medium">  {{ blog.tags[0] }}</el-tag>{{ new Date(blog.createdAt).toLocaleString().slice(0, -3) }}</div>
          </div>
        </template>
        <el-tag 
          v-for="(tag, index) in blog.tags" 
          :key="index" 
          size="medium">{{ tag }}</el-tag>
        <div 
          v-highlightjs 
          class="content" 
          v-html="blog.content"/>
        <br>
        <div class="hidden-sm-and-up blog-date">{{ new Date(blog.createdAt).toLocaleString().slice(0, -3) }}</div>

        <el-button 
          type="primary" 
          icon="el-icon-share" 
          size="small" 
          @click="copyToClipboard(blog._id)">Share</el-button>

        <el-button
          v-if="$store.state.authUser && $store.state.authUser.role === 'admin'"
          type="primary"
          size="small"
          class="fa fa-edit"
          @click="routingUpdateBlog(currentPage, blog._id)"
        >
          編集
        </el-button>
      </el-collapse-item>
    </el-collapse>

    <div class="center pagination">
      <el-pagination
        :total="total"
        :page-size="10"
        :current-page="currentPage"
        layout="prev, pager, next"
        @current-change="currentPageChange"
      />
    </div>

    <nuxt-link 
      v-if="$store.state.authUser && $store.state.authUser.role === 'admin'" 
      class="fa fa-edit" 
      to="/blog/create">Blog作成</nuxt-link>

    <my-scroll-top-button/>
  </article>
</template>

<script>
import axios from 'axios'
import MyScrollTopButton from '~/components/common/TheScrollTopButton.vue'

let config = require('../../../config/production.json')

export default {
  components: {
    MyScrollTopButton
  },
  validate({ params }) {
    return (
      /^\d+$/.test(params.page) &&
      params.page >= 1 &&
      (params.id === void 0 || /^[a-z0-9]+$/.test(params.id))
    )
  },
  data() {
    return {
      total: 0,
      currentPage: 1
    }
  },
  created() {
    this.currentPage = Number(this.$route.params.page)

    axios
      .get('/api/blog/count-all')
      .then(response => {
        this.total = response.data
      })
      .catch(err => {
        console.log(err)
      })
  },
  async asyncData({ params, res }) {
    let { data } = await axios.get('/api/blog/' + (params.page - 1))
    const detailId = params.id === void 0 ? data[0]._id : params.id
    return {
      blogs: data,
      detailId: detailId
    }
  },
  methods: {
    currentPageChange(val) {
      this.$router.push({ path: '/blog/' + val })
    },
    copyToClipboard(id) {
      const temp = document.createElement('div')
      temp.appendChild(document.createElement('pre')).textContent =
        config.server.baseUrl + '/blog/' + this.currentPage + '/' + id

      const s = temp.style
      s.position = 'fixed'
      s.left = '1000%'

      document.body.appendChild(temp)
      document.getSelection().selectAllChildren(temp)

      const result = document.execCommand('copy')

      if (result) {
        this.$message({
          message: 'シェアリンクをコピーしました',
          type: 'success'
        })
      } else {
        this.$message.error('リンクコピーエラー')
      }
    },
    routingUpdateBlog(currentPage, id) {
      this.$router.push({ path: '/blog/' + currentPage + '/' + id + '/update' })
    }
  },
  transition(to, from) {
    if (!from) return 'slide-left'
    if (from.name === 'contact' || +to.params.page < +from.params.page) {
      return 'slide-right'
    } else {
      return 'slide-left'
    }
  },
  head() {
    return {
      title: 'Blog'
    }
  }
}
</script>

<style lang="stylus" scoped>
.blog
  text-align left
  word-wrap break-word
  overflow-wrap break-word

.blog-title
  font-size 1.5em
  font-weight bold
  width 50vw
  max-width 500px
  white-space nowrap
  overflow hidden
  text-overflow ellipsis

@media (max-width 767px)
  .blog-title
    width 70vw


.blog-date
  font-style italic

.content
  word-wrap break-all
  /deep/ img
    max-width 80%
    display flex
    margin 0 auto

</style>
