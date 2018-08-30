module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://ap.icolor.com.cn/juzhuang-pc/styles/reset.min.css'}
    ]
  },
  css: [
    {src: '~assets/stylus/common.styl', lang: 'stylus'}
  ],
  cache: true,
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  plugins: [
    {src: '~/plugins/axios.js'},
    {src: '~/plugins/lazyload.js', ssr: true}
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  proxy: [
    [
      '/api',
      {
        target: 'https://api.icolor.com.cn',
        pathRewrite: {'^/api': '/'}
      }
    ]
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios', 'vue-lazyload'],
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

