<template>
  <div>
    <home-header></home-header>
  </div>
</template>

<script>
import HomeHeader from './components/Header' // Header是保留字，不能作为组件名，所以存为HomeHeader
export default {
  name: 'Home',
  components: {
    HomeHeader
  }
}
</script>

<style>

</style>
