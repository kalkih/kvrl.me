module.exports = {
  siteUrl: "https://kvrl.me",
  siteName: 'Karl Kihlström',
  siteDescription: 'Portfolio of Karl Kihlström.',
  icon: './src/assets/images/fav.png',

  templates: {
    Tag: '/tag/:id'
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Feature',
        path: 'content/features/*.md',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    }
  ],

  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  },

  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}
