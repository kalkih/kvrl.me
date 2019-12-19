import '~/assets/style/index.scss'

import DefaultLayout from '@/layouts/Default'
import inViewportDirective from 'vue-in-viewport-directive'

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
  Vue.directive('in-viewport', inViewportDirective)

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap'
  })

  head.link.push({
    rel: 'dns-prefetch',
    href: '//fonts.googleapis.com'
  })

  head.link.push({
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com/',
    crossorigin: '',
  })
}