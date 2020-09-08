<template>
  <div class="hospital_nav-container">
    <div class="bg"></div>
    <div class="titles">
      <div class="left-title">会员服务</div>
      <div class="right-title"> {{isistore == 1 ?'专属会员服务，一站式解决作物问题':'网院'}}</div>
    </div>
    <ul class="nav-ul" :class="{'isstore':isistore == 0 }">
      <li @click="goToOnline">
        <div class="icon icon01"></div>
        <p>线上网诊</p>
      </li>
      <li @click="goToZuo" v-if="isistore == 1">
        <div class="icon icon02"></div>
        <p>坐诊巡诊</p>
      </li>
      <li @click="goToCeTu" v-if="isistore == 1">
        <div class="icon icon03"></div>
        <p>测土配方</p>
      </li>
      <li @click="goToRegistration" v-if="isistore == 1">
        <div class="icon icon04"></div>
        <p>专家挂号</p>
      </li>
      <li @click="goToAsk" v-if="isistore == 1">
        <div class="icon icon05"></div>
        <p>提问</p>
      </li>
      <li @click="goToGoodBase" v-if="isistore == 1">
        <div class="icon icon06"></div>
        <p>优质基地</p>
      </li>
      <li>
        <div class="icon icon07"></div>
        <p>农资店铺</p>
      </li>
      <li @click="goToRegistration" v-if="isistore == 0">
        <div class="icon icon04"></div>
        <p>专家</p>
      </li>
      <li @click="goToLive" v-if="isistore == 0">
        <div class="icon icon12"></div>
        <p>直播</p>
      </li>
      <li v-if="isistore == 1 && vip == 1  ">
        <div class="icon icon08"></div>
        <p>已是会员</p>
      </li>
      <li v-if="isistore == 1 && vip == 0" @click="goToApplyVip">
        <div class="icon icon09"></div>
        <p class="p2">申请会员</p>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "hospitalNav",
  components: {},
  props: {},
  data() {
    return {
      isistore: 1,
      vip: 0,
    };
  },
  computed: {
    ...mapState(["mid"]),
  },
  watch: {},
  mounted() {},
  destroyed() {},
  methods: {
    goToOnline() {
      // 路由 去线上网诊
      this.$router
        .push({
          path: "hospital_online",
        })
        .catch((err) => err);
    },
    goToZuo() {
      // 路由 坐诊巡诊
      this.$router
        .push({
          path: "zuozhen_list",
        })
        .catch((err) => err);
    },
    goToCeTu() {
      // 路由 测土配方
      this.$router
        .push({
          path: "cetu_list",
        })
        .catch((err) => err);
    },
    goToRegistration() {
      // 路由 专家挂号
      this.$router
        .push({
          path: "/expert_registration",
        })
        .catch((err) => err);
    },
    goToAsk() {
      // 路由 提问
      this.$router
        .push({
          path: "/ask",
        })
        .catch((err) => err);
    },
    goToExpert() {
      // 路由 医院专家
      this.$router
        .push({
          path: "/hospital_expert",
        })
        .catch((err) => err);
    },
    goToGoodBase() {
      // 路由 优质基地
      this.$router
        .push({
          path: "/good_base",
        })
        .catch((err) => err);
    },
    goToApplyVip() {
      // 路由 申请会员
      this.$router
        .push({
          path: "/apply_vip",
        })
        .catch((err) => err);
    },
    goToLive() {
      // 路由 直播
      this.$router
        .push({
          path: "/live",
        })
        .catch((err) => err);
    },
  },
};
</script>
<style lang="stylus" scoped>
.hospital_nav-container
  padding 15px 0
  background-image url('https://img.yzcdn.cn/vant/apple-2.jpg')
  background-color rgba(0, 0, 0, 0.5)
  background-size cover
  background-position center center
  position relative
  height 190px
  margin-bottom 10px
  .bg
    position absolute
    width 100%
    height 100%
    background rgba(0, 0, 0, 0.7)
    left 0
    top 0
    z-index 1
  .titles
    z-index 2
    padding 0 12px
    position relative
    color #fff
    display flex
    justify-content space-between
  .nav-ul
    z-index 2
    position relative
    font-size 0
    margin-top 5px
    &.isstore
      margin-top 30px
    li
      font-size 12px
      display inline-block
      color #AED0FF
      width 25%
      margin-top 15px
      text-align center
      .icon01
        width 25px
        height 25px
        background url('./37.png') no-repeat
        background-size cover
        background-position center center
        margin 0 auto 10px
      .icon02
        width 25px
        height 24px
        background url('./44.png') no-repeat
        background-size cover
        background-position center center
        margin 0 auto 10px
      .icon03
        width 20px
        height 25px
        background url('./45.png') no-repeat
        background-size cover
        background-position center center
        margin 0 auto 10px
      .icon04
        width 25px
        height 25px
        background url('./38.png') no-repeat
        background-size cover
        background-position center center
        margin 0 auto 10px
      .icon05
        width 25px
        height 25px
        background url('./43.png') no-repeat
        background-size cover
        background-position center center
        margin 0 auto 10px
      .icon06
        width 25px
        height 25px
        background url('./42.png') no-repeat
        background-size cover
        background-position center center
        margin 0 auto 10px
      .icon07
        width 25px
        height 25px
        background url('./39.png') no-repeat
        background-size cover
        background-position center center
        margin 0 auto 10px
      .icon08
        width 25px
        height 25px
        background url('./41.png') no-repeat
        background-size cover
        background-position center center
        margin 0 auto 10px
      .icon09
        width 25px
        height 25px
        background url('./40.png') no-repeat
        background-size cover
        background-position center center
        margin 0 auto 10px
      .icon12
        width 25px
        height 25px
        background url('./53.png') no-repeat
        background-size cover
        background-position center center
        margin 0 auto 10px
      .p2
        color #ff6600
</style>
