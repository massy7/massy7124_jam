<template>
  <article class="wrapper">
    <section>
      <h1>Account</h1>

      <div class="grid grid-logo center">
        <div class="">
          <a 
            href="https://twitter.com/massy7124" 
            title="Twitter" 
            target="_blank">
            <img 
              class="bland-logo" 
              src="/img/logo/twitter.svg" 
              alt="Twitter">
          </a>
        </div>
        <div class="">
          <a 
            href="https://www.facebook.com/massy7124" 
            title="Facebook" 
            target="_blank">
            <img 
              class="bland-logo" 
              src="/img/logo/facebook.svg" 
              alt="Facebook" 
              style="width:70%;">
          </a>
        </div>
        <div class="">
          <a 
            href="https://www.instagram.com/massy7124" 
            title="Instagram" 
            target="_blank">
            <img 
              class="bland-logo" 
              src="/img/logo/instagram.svg" 
              alt="Instagram">
          </a>
        </div>
        <!-- <div class="">
                    <a href="https://github.com/massy7" title="GitHub" target="_blank">
                        <img class="bland-logo" src="/img/logo/github.svg" alt="GitHub" style="width:70%;">
                    </a>
                </div> -->
        <div class="">
          <a 
            href="https://ask.fm/massy7124" 
            title="Ask.fm" 
            target="_blank">
            <img 
              class="bland-logo" 
              src="/img/logo/askfm.svg" 
              alt="Ask.fm">
          </a>
        </div>
        <div class="">
          <a 
            href="https://peing.net/ja/massy7124" 
            title="Peing" 
            target="_blank">
            <img 
              class="bland-logo" 
              src="/img/logo/peing.svg" 
              alt="Peing">
          </a>
        </div>
        <div class="">
          <a 
            href="https://www.wantedly.com/users/18012899" 
            title="Wantedly" 
            target="_blank">
            <img 
              class="bland-logo" 
              src="/img/logo/wantedly.svg" 
              alt="Wantedly" 
              style="width:70%;">
          </a>
        </div>
      </div>
    </section>

    <section>
      <h1>Form</h1>

      <div class="center">
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSfMaxwA9ETS1pvwDSivvW5pTD_DuYbePh-VJ8UYWF6xGbcHPA/viewform?embedded=true" 
          style="width: 80vw; max-width: 660px; height: 860px;" 
          frameborder="0" 
          marginheight="0" 
          marginwidth="0">読み込んでいます...</iframe>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  data() {
    return {
      form: {
        account: '',
        content: ''
      },
      rules: {
        account: [{ required: true, message: '必須項目', trigger: 'blur' }],
        content: [{ required: true, message: '必須項目', trigger: 'blur' }]
      }
    }
  },
  methods: {
    copyToClipboard() {
      const email = document.querySelector('#email-address')
      email.select()
      document.execCommand('copy')
      this.$notify({
        title: 'E-mail Address Copied!',
        type: 'success',
        position: 'bottom-right'
      })
    },
    submitForm(formName) {
      console.log('submit')
    }
  },
  transition(to, from) {
    if (!from) return 'slide-left'
    return 'slide-left'
  },
  head() {
    return {
      title: 'Contact'
    }
  }
}
</script>

<style lang="stylus" scoped>
#email
  width 250px
  margin 0 auto

#email /deep/ #email-address
  width 250px
  text-align center

#icon-email
  font-size 4em

.form-direct
  margin 0 auto
  max-width 500px
</style>
