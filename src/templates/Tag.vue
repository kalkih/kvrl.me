<template>
  <Layout>
    <div class="content">
      <h1 class="tag">
        #{{ $page.tag.title }}
      </h1>

      <div class="features">
        <Feature v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" :feature="edge.node"/>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Feature {
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
            tags {
              id
              title
              path
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
import Author from '@/components/Author'
import Feature from '@/components/Feature'

export default {
  components: {
    Author,
    Feature
  },
  metaInfo () {
    return {
      titleTemplate: `#${this.$page.tag.title} - %s`,
    }
  },
}
</script>

<style lang="scss" scoped>
.content {
  max-width: var(--content-width);
  margin: 0 auto;
  padding: var(--space);
  padding-top: calc(var(--space) * 2);

  h1 {
    font-size: 2em;
    color: var(--red);
  }
}
</style>

