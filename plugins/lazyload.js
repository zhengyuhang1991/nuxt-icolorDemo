import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'
import loading from '~/assets/images/loading.jpg'

Vue.use(VueLazyLoad, {
  error: loading,
  loading: loading
})
