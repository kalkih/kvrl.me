import '~/assets/style/index.scss'

import DefaultLayout from '@/layouts/Default'
import inViewportDirective from 'vue-in-viewport-directive'

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
  Vue.directive('in-viewport', inViewportDirective)
}