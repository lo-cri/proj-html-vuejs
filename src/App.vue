<script >
import HeaderComp from './components/HeaderComp.vue'
import IntroductionComp from './components/IntroductionComp.vue'
import MainComp from './components/MainComp.vue';
import FooterComp from './components/FooterComp.vue';
export default {
  name: "App",
  components: {
    HeaderComp,
    IntroductionComp,
    MainComp,
    FooterComp
  }
}

</script>

<template>
  <HeaderComp />
  <IntroductionComp />
  <MainComp />
  <FooterComp />
</template>

<style lang="scss">
@use './style/main.scss'
</style>
