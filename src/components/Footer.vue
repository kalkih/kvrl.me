<template>
  <footer class="footer">
    <span class="footer__copyright"
      >Copyright © {{ date }} - Karl Kihlström</span
    >
    <Theme-switcher />
  </footer>
</template>

<script>
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";

export default {
  components: { ThemeSwitcher },
  computed: {
    date() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="scss">
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space);
  padding-top: calc(var(--space) * 2);
  text-align: center;
  font-size: 0.8em;
  font-weight: 500;
  opacity: 0.75;
  color: var(--font-color-alt);

  .theme-switcher {
    font-size: 1.6em;

    @media screen and (min-width: 650px) {
      display: none;
    }
  }
}
</style>
