<template>
  <header class="header">
    <a class="header__logo" href="/" aria-label="Navigate home">
      <Logo alt="Logo" />
    </a>
    <div class="header__nav">
      <Nav />
      <Theme-switcher />
    </div>
  </header>
</template>

<script>
import Nav from "@/components/Nav";
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";
import Logo from "@/assets/svgs/Logo.svg";

export default {
  components: {
    Nav,
    Logo,
    ThemeSwitcher,
  },
};
</script>

<style lang="scss">
.header {
  display: flex;
  max-width: var(--content-width);
  margin: 0 auto;
  justify-content: space-between;
  padding: 0 var(--space);
  padding-top: var(--space);
  align-items: center;

  &__nav {
    display: flex;
    align-items: center;

    .theme-switcher {
      display: none;
      margin: 0 1em;
    }

    @media screen and (min-width: 650px) {
      .theme-switcher {
        display: block;
      }
    }
  }

  &__logo {
    &:hover {
      svg {
        animation: bounce 1s ease infinite forwards;

        circle {
          fill: var(--logo-hover-color, var(--font-color));
          stroke: #fff;
          stroke-width: 10px;
        }
      }
    }

    > svg {
      display: block;
      height: 4em;
      width: 4em;
      overflow: visible;
      transition: transform 0.15s;

      * {
        transform-origin: center;
        transition: all 0.25s ease;
      }

      circle {
        animation: circle 0.75s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        transform: scale(0);
        fill: var(--link-color);
      }
      .line {
        animation: line 0.75s 0.35s cubic-bezier(0.68, -0.55, 0.265, 1.55)
          forwards;
        transform: scale(0);
      }
      .line-3 {
        animation: line 0.75s 0.15s cubic-bezier(0.68, -0.55, 0.265, 1.55)
          forwards;
      }
    }

    @keyframes circle {
      from {
        opacity: 0;
        transform: scale(0);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    @keyframes line {
      from {
        transform: scale(0);
      }
      to {
        transform: scale(0.75);
      }
    }

    @keyframes bounce {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(0.85);
      }
      100% {
        transform: scale(1);
      }
    }
  }

  @media screen and (min-width: 650px) {
    align-items: center;
  }
}
</style>
