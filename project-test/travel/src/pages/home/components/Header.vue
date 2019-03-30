<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scope>
  @import '~styles/variables.styl'
  // 或 @import '~@/assets/styles/variables.styl'
  // @代表src目录，在css使用@需要加～前缀
  // 在build/webpack.base.conf.js中的resolve可以更改@的指向
  .header
    display: flex
    line-height: .86rem
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin: .12rem .1rem
      padding-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc
    .header-right
      width: 1rem
      float: right
      color: white
      .arrow-icon
        font-size: .2rem
</style>
