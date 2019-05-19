import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export const state = () => ({
  blogs: []
})

export const getters = {
  list: state => {
    return state.blogs
  },
  getById: state => id => {
    const blog = state.blogs.filter(blog => blog.id === id)[0]
    if (blog === undefined) {
      $nuxt.error({
        statusCode: 404,
        message: 'Not found.'
      })
    }
    return blog
  }
}

export const mutations = {
  replace(state, blogs) {
    state.blogs = blogs
  },
  saves(state, blogs) {
    state.blogs = [state.blogs, ...blogs]
  },
  add(state, blog) {
    state.blogs.push(blog)
  }
}

export const actions = {
  async fetchBlogs({ commit }) {
    await client
      .getEntries({
        content_type: process.env.CTF_BLOG_POST_TYPE_ID,
        order: '-fields.date'
      })
      .then(entries => {
        commit('replace', entries.items.map(item => item.fields))
      })
      .catch(console.error)
  },
  async fetchBlogById({ commit }, id) {
    await client
      .getEntries({
        content_type: process.env.CTF_BLOG_POST_TYPE_ID,
        'fields.id': id,
        order: '-fields.date'
      })
      .then(entries => {
        if (entries.items.length !== 0) {
          commit('add', entries.items[0].fields)
        }
      })
      .catch(console.error)
  }
}
