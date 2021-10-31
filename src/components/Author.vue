<template>
  <div class="author">
    <h2 class="author__intro">
      Hello, my name is Karl, I'm a
      <a href="https://github.com/kalkih">software engineer</a> with a passion
      for web & frontend development
    </h2>
  </div>
</template>

<style lang="scss">
.author {
  max-width: var(--content-width);
  margin: 0 auto;
  padding: calc(var(--space));
  margin-top: calc(var(--space) * 2);

  &__intro {
    margin: 0;
    font-size: calc(1em + 2.4vw);
    line-height: 1.45em;
    text-align: left;
    font-weight: 500;

    a {
      text-decoration: none;
    }

    @media screen and (min-width: 1000px) {
      font-size: 2.4em;
    }
  }
}
</style>
