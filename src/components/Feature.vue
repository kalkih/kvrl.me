<template>
  <div class="feature">
    <div class="feature__images" v-in-viewport.once="{ margin: '-10% 0px' }" :style="rotation">
      <g-image
        v-for="(image, index) in feature.feature_images"
        :key="index"
        :alt="feature.title + '-preview-' + index"
        :src="image"
      />
    </div>
    <div class="feature__info">
      <h3 class="feature__title" v-html="feature.title" />
      <div class="feature__thumbs" v-in-viewport.once="{ margin: '-10% 0px' }">
        <g-image
          v-for="(image, index) in feature.mobile_images"
          :key="index"
          :alt="feature.title + '-mpreview-' + index"
          :src="image"
        />
      </div>
      <div>
        <p class="feature__desc" v-html="feature.description" />
        <p v-if="feature.dev_description" class="feature__desc" v-html="feature.dev_description" />
        <Tags class="feature__tags" :feature="feature" />
      </div>
      <div v-if="showButtons" class="feature__buttons">
        <BaseButton v-if="feature.play_store_url" link :href="feature.play_store_url" rel="noopener" class="--accent">
          <span>Android app</span>
        </BaseButton>
        <BaseButton v-if="feature.live_url" link :href="feature.live_url" rel="noopener" class="--accent">
          <span>Web app</span>
        </BaseButton>
        <BaseButton v-if="feature.github_url" link :href="feature.github_url" rel="noopener" class="--alt">
          <span>View source</span>
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
import Tags from '@/components/Tags'
import BaseButton from '@/components/BaseButton'

export default {
  components: {
    Tags,
    BaseButton,
  },
  props: ['feature'],
  computed: {
    rotation () {
      return this.feature.rotation ? {
        'transform': `rotate(${this.feature.rotation}deg)`,
      } : ''
    },
    showButtons () {
      return this.feature.live_url || this.feature.github_url || this.feature.play_store_url
    },

  },
}
</script>

<style lang="scss">
.feature {
  position: relative;
  border-radius: var(--radius);
  overflow: visible;
  display: flex;
  flex-flow: column;

  @media screen and (min-width: 650px) {
    flex-flow: row;
  }

  // &:nth-child(even) {
  //   .feature__info {
  //     order: 1;
  //     margin-right: 0;
  //     margin-left: 10%;
  //   }
  // }

  &__buttons {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 0 !important;

    .base-button {
      margin-top: 0;
      margin-right: .7em;

      &.--alt {
        font-size: .7em;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }

  &__thumbs {
    margin-bottom: 0 !important;

    @media screen and (min-width: 650px) {
      display: none;
    }

    > img {
      margin: 0 auto !important;
    }
  }

  &__info {
    flex: 1;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    order: -1;

    @media screen and (min-width: 650px) {
      margin-right: 10%;
      max-width: 50%;
    }

    > *,
    > div > * {
      margin: 10px 0;
      @media screen and (min-width: 650px) {
        margin: 20px 0;
      }
    }
    .tags {
      margin: 16px 0;
      font-size: 1.2em;

      @media screen and (min-width: 650px) {
        margin: 26px 0;
      }
    }
  }

  &__title,
  &__more {
    font-weight: 600;
  }

  &__desc {
    font-weight: 500;
    line-height: 1.5em;
    font-size: .9em;
  }

  &__images,
  &__thumbs {
    &.in-viewport {
      @for $i from 1 through 4 {
        img:nth-of-type(#{$i}) {
          opacity: 1;
          transition-delay: #{$i * .15}s;
          transform: translateY(0);
        }
      }
    }

    img {
      transition: transform .75s ease, opacity 1s;
      transform: translateY(25%);
      opacity: 0;
    }
  }

  &__images {
    display: none;
    align-self: center;
    flex: 1;
    width: 70%;
    position: relative;
    position: absolute;
    left: 55%;

    @media screen and (min-width: 650px) {
      display: block;
      width: 85%;
    }

    @media screen and (min-width: 900px) {
      width: 70%;
    }

    img {
      display: inline-block;
      position: absolute;
      width: 100%;
      height: auto;
      left: 0;
    }
    > *:first-child {
      position: relative;
    }
  }
}
</style>