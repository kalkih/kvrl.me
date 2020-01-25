<template>
  <div id="app">

    <Header/>

    <main class="main">
      <slot/>
    </main>

    <Footer/>

  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    Footer,
  },
}
</script>

<style lang="scss">
#app {
  animation: reveal .25s;
}
main {
  margin: 0 auto;
  scroll-behavior: smooth;
}
@keyframes reveal {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
