<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <div>a</div>
  </div>
</template>

<script>
import HomeHeader from './components/Header' // Header是保留字，不能作为组件名，所以存为HomeHeader
import HomeSwiper from './components/Swiper'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style>

</style>
