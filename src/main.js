import '~/assets/style/index.scss'

import DefaultLayout from '@/layouts/Default'
import inViewportDirective from 'vue-in-viewport-directive'

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
  Vue.directive('in-viewport', inViewportDirective)

  head.link.push({
    rel: 'dns-prefetch',
    href: '//fonts.googleapis.com'
  })

  head.link.push({
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com/',
    crossorigin: '',
  })

  head.link.push({
    rel: 'preload',
    as: "style",
    href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap"
  })

  head.link.push({
    rel: 'stylesheet',
    href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap",
    media: "print",
    onload: "this.media='all'"
  })
}