<template>
  <div>
    <div>{{xx}}{{xxx}}</div>
    <button @click="addNum(3)">Add number</button>
    <footer v-show="this.$store.state.footerView"></footer>
    <button @click="hideFooter">hide footer</button>
    <button @click="showFooter">show footer</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Parent',
  data () {
    return {
      num: 3
    }
  },
  computed: mapState({
    xx: 'changableNum',
    xxx: 'constant'
  }),
  methods: {
    ...mapActions([
      'addNum',
      'hideFooter',
      'showFooter'
    ])
  }
  // addNum () {
  //   this.$store.dispatch('addNum', 3)
  // },
  // hideFooter () {
  //   this.$store.commit('hideFooter')
  // },
  // showFooter () {
  //   this.$store.commit('showFooter')
  // }
}
</script>

<style lang='stylus' scoped>
  footer
    height: 20px
    width: 300px
    background: green
</style>
