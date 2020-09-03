<template>
  <div class="good_base-container">
    <Header :indexHeader="false"></Header>
    <ul class="base-ul">
      <li v-for="item in 3" :key="item">
        <div class="status">金牌认证</div>
        <van-image class="img"></van-image>
        <div class="text">
          <div class="h2">浙江省衢州市常山县大宝山柑橘专 业合作社</div>
          <div class="p2">黄桃 100-500亩</div>
          <div class="join-time">
            <van-image class="avator" round></van-image>
            <div class="time">2020-12-30加入医院</div>
          </div>
          <div class="name">
            <div class="icon"></div>
            常山胡柚专科医院
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import Header from "@/components/header/header";
export default {
  name: "meBase",
  components: { Header },
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {},
  destroyed() {},
  methods: {},
};
</script>
<style lang="stylus" scoped>
.good_base-container
  .base-ul
    margin-top 10px
    background #fff
    padding-left 12px
    li
      display flex
      padding 20px 0
      position relative
      border-bottom 1px solid #e5e5e5
      &:last-child
        border none
      .status
        position absolute
        left 0
        top 30px
        background #ff6600
        color #fff
        font-size 12px
        border-top-right-radius 100px
        border-bottom-right-radius 100px
        width 65px
        height 20px
        line-height 20px
        text-align center
        z-index 1
        font-size 12px
        &.gold
          background #ff6600
        &.base
          background #155BBB
        &.none
          background #838383
      .img
        width 105px
        height 105px
        margin-right 14px
      .text
        flex 1
        min-width 0
        .h2
          color #000000
          font-size 15px
          line-height 20px
        .p2
          font-size 12px
          color #999999
          margin-top 5px
        .join-time
          display flex
          align-items center
          margin-top 10px
          .avator
            width 30px
            height 30px
            margin-right 5px
          .time
            color #999
            font-size 12px
        .name
          display flex
          align-items center
          margin-top 10px
          color #999999
          font-size 12px
          .icon
            width 20px
            height 20px
            background url('./54.png') no-repeat
            background-position center
            background-size cover
            margin-right 16px
  .tip
    font-size 12px
    color #999
    margin 15px 0
    text-align center
</style>
