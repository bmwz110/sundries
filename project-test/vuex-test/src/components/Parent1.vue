<template>
  <div>
    <div>{{num}}</div>
    <button @click="addNum">Add number</button>
    <footer v-show="this.$store.getters.isShow"></footer>
    <button @click="hideFooter">hide footer</button>
    <button @click="showFooter">show footer</button>
  </div>
</template>

<script>
export default {
  name: 'Parent',
  computed: {
    num () {
      return this.$store.state.changableNum
    }
  },
  methods: {
    addNum () {
      this.$store.state.changableNum += 1
    },
    hideFooter () {
      this.$store.commit('hideFooter')
    },
    showFooter () {
      this.$store.commit('showFooter')
    }
  }
}

</script>

<style lang='stylus' scoped>
  footer
    height: 20px
    width: 300px
    background: green
</style>
