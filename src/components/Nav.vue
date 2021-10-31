<template>
  <nav class="nav">
    <a href="#work" @click="handleNav">
      <span>Work</span>
    </a>
    <a href="#connect" @click="handleNav">
      <span>Connect</span>
    </a>
  </nav>
</template>

<script>
import Nav from "@/components/Nav";

export default {
  components: {
    Nav,
  },
  methods: {
    handleNav() {
      window.location.hash = "";
    },
  },
};
</script>

<style lang="scss">
.nav {
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  align-items: flex-end;

  a {
    text-decoration: none;
    color: var(--font-color);
    font-weight: 600;
    padding: calc(var(--space) / 4);
    position: relative;
    letter-spacing: 0.05em;

    span {
      position: relative;
      display: inline-block;
      transition: transform 0.3s, color 0.15s;
    }

    &:hover {
      opacity: 1;

      span {
        transform: translateX(-4px);
        color: var(--link-color);

        @media screen and (min-width: 650px) {
          transform: translateY(-4px);
        }
      }
    }
  }

  @media screen and (min-width: 650px) {
    min-width: 50%;
    flex-wrap: nowrap;
    justify-content: flex-end;
    flex-flow: row;

    a {
      margin: 0 1em;
    }
  }
}
</style>
