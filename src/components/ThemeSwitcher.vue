<template>
  <div
    class="theme-switcher"
    @click="setTheme"
    :style="styles"
    :class="classes"
  >
    <div class="wrapper">
      <Sun class="sun" alt="sun" />
      <Moon class="moon" alt="moon" />
    </div>
  </div>
</template>

<script>
import Sun from "@/assets/svgs/Sun.svg";
import Moon from "@/assets/svgs/Moon.svg";

const userPrefersDark = () =>
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const ROTATION_AMOUNT = 180;

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

export default {
  components: {
    Sun,
    Moon,
  },
  data() {
    return {
      rotation: 0,
      theme: THEME.LIGHT,
    };
  },
  created() {
    if (userPrefersDark()) {
      this.theme = THEME.DARK;
      this.rotation = ROTATION_AMOUNT;
    } else {
      this.theme = THEME.LIGHT;
    }
  },
  methods: {
    setTheme() {
      document.body.classList.remove(`--${this.theme}`);
      this.theme = this.theme === THEME.DARK ? THEME.LIGHT : THEME.DARK;
      document.body.classList.add(`--${this.theme}`);
      this.rotation += ROTATION_AMOUNT;
    },
  },
  computed: {
    styles() {
      return {
        "--rotation": `${this.rotation}deg`,
      };
    },
    classes() {
      return {
        "--light": this.theme === THEME.LIGHT,
        "--dark": this.theme === THEME.DARK,
      };
    },
  },
};
</script>

<style lang="scss">
$size: 1.6em;
$animation-duration: 0.35s;

.theme-switcher {
  display: flex;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: $size;
  width: $size;
  height: $size;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: background-color 0.25s;
  user-select: none;

  &.--light {
    background-color: rgba(0, 0, 0, 0.05);
    &:hover {
      background-color: rgba(0, 0, 0, 0.15);
    }
  }

  &.--dark {
    &:hover {
      background-color: rgba(255, 255, 255, 0.15);
    }
  }

  svg {
    height: $size;
    width: $size;
    border-radius: $size;
    color: #fff;

    > path {
      transform: scale(0.75);
      transform-origin: center;
    }
  }

  .moon {
    transform: rotate(180deg);
  }

  .sun {
    color: var(--font-color);
  }

  .wrapper {
    transition: transform #{$animation-duration * 2} ease;
    position: absolute;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    transform: rotate(var(--rotation));
    transform-origin: center;
    height: #{$size * 2.5};
  }
}
</style>
