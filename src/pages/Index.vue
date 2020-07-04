<template>
  <Layout>
    <Author/>

    <div class="content">
      <h2 class="featured-title" id="work">featured work</h2>
      <div class="features">
        <Feature v-for="edge in $page.features.edges" :key="edge.node.id" :feature="edge.node"/>
      </div>
      <h2 class="featured-title" id="connect">connect with me</h2>
    </div>

    <Connect/>
  </Layout>
</template>

<page-query>
query {
  features: allFeature (
    filter: { published: { eq: true }}
    sortBy: "date", order: DESC
  ) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        description
        dev_description
        path
        feature_images
        mobile_images
        rotation
        live_url
        github_url
        play_store_url
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<static-query>
query {
  metadata {
    siteName
    siteDescription
    siteUrl
  }
}
</static-query>

<script>
import Author from '@/components/Author'
import Connect from '@/components/Connect'
import Feature from '@/components/Feature'

export default {
  components: {
    Author,
    Connect,
    Feature
  },
  metaInfo () {
    return {
      title: this.$static.metadata.siteName,
      titleTemplate: '',
      meta: [
        {
          property: "og:title",
          content: this.$static.metadata.siteName
        },
        {
          property: "og:description",
          cotent: this.$static.metadata.siteDescription
        },
        {
          property: 'og:image',
          content: this.$static.metadata.siteUrl + '/og.png',
        },
        {
          property: 'og:image:width',
          content: '124'
        },
        {
          property: 'og:image:height',
          content: '124'
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.content {
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 0 var(--space);
}
.featured-title {
  display: inline-block;
  position: relative;
  font-weight: 700;
  margin:
    calc(var(--space) * 2)
    0
    calc(var(--space))
    0;

  &:before {
    content: '';
    position: absolute;
    bottom: -12px;
    height: 4px;
    width: 80%;
    background: var(--link-color);
  }
}
.features {

  .feature {
    padding: calc(var(--space)) 0;
  }
  
  @keyframes fade-in {
    from {
      transform: translateY(calc(var(--space) * 2));
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
}
</style>