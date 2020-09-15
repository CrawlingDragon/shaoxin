
<template>
  <div class="hospital_fast_nav-container" v-show="showFlag">
    <div class="wrap">
      <div class="top">
        <div class="kind">医院导航</div>
        <van-icon name="cross" class="cross" @click="closeNav" />
      </div>
      <div class="nav-box">
        <div class="title">会员服务<span>专属会员服务，一站式解决作物问题</span></div>
        <van-grid class="nav-ul" :border="false" :gutter="15">
          <van-grid-item text="线上网诊" @click="goToOnline" />
          <van-grid-item text="坐诊巡诊" @click="goToZuo" v-if="isstore == 1" />
          <van-grid-item text="测土配方" @click="goToCeTu" v-if="isstore == 1" />
          <van-grid-item :text="isstore == 1?'专家挂号':'专家'" @click="goToRegistration" />
          <van-grid-item text="资讯" @click="goToMessage" />
          <van-grid-item text="专家" @click="goToExpert" />
          <van-grid-item text="优质基地" @click="goToGoodBase" v-if="isstore == 1" />
          <van-grid-item text="会员提问" @click="goToAsk" v-if="isstore == 1" />
          <van-grid-item text="店铺" />
          <van-grid-item text="直播" @click="goToLive" />
          <van-grid-item text="简介" @click="goToIntro" />
        </van-grid>
      </div>
      <div class="join-btn" v-if="importuser == 0" @click="goToApply">
        申请加入医院
        <span class="free">免费</span>
      </div>
      <div class="joined" v-else>2017-10-29 加入医院成为会员</div>
      <div class="know-vip" @click="goToVip">了解更多会员权益 ></div>
      <div class="go-index" @click="gotoIndex">
        <van-image class="logo" :src="require('./1.png')"></van-image>
        柯桥新型庄稼医院首页
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "hospitalFastNav",
  components: {},
  props: {
    showFlag: {
      type: Boolean,
      default: false,
    },
    isstore: {
      type: Number,
      default: 1,
    },
    importuser: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["mid", "uid"]),
  },
  watch: {},
  mounted() {},
  destroyed() {},
  methods: {
    closeNav() {
      this.$emit("changeFlag", false);
    },
    goToOnline() {
      // 路由  网上巡诊
      this.$router
        .push({
          path: "hospital_online",
        })
        .catch((err) => err);
      this.$emit("changeFlag", false);
    },
    goToZuo() {
      // 路由 坐诊巡诊
      this.$router
        .push({
          path: "zuozhen_list",
        })
        .catch((err) => err);
      this.$emit("changeFlag", false);
    },
    goToCeTu() {
      // 路由 测土配方
      this.$router
        .push({
          path: "cetu_list",
        })
        .catch((err) => err);
      this.$emit("changeFlag", false);
    },
    goToRegistration() {
      // 路由 测土配方
      this.$router
        .push({
          path: "/expert_registration",
        })
        .catch((err) => err);
      this.$emit("changeFlag", false);
    },
    goToMessage() {
      // 路由 提问
      this.$router
        .push({
          path: "/message",
        })
        .catch((err) => err);
      this.$emit("changeFlag", false);
    },
    goToAsk() {
      // 路由 提问
      this.$router
        .push({
          path: "/ask",
        })
        .catch((err) => err);
      this.$emit("changeFlag", false);
    },
    goToExpert() {
      // 路由 医院专家
      this.$router
        .push({
          path: "/hospital_expert",
        })
        .catch((err) => err);
      this.$emit("changeFlag", false);
    },
    goToGoodBase() {
      // 路由 优质基地
      this.$router
        .push({
          path: "/good_base",
        })
        .catch((err) => err);
      this.$emit("changeFlag", false);
    },
    goToLive() {
      // 路由 直播
      this.$router
        .push({
          path: "/live",
        })
        .catch((err) => err);
      this.$emit("changeFlag", false);
    },
    goToIntro() {
      // 路由 简介
      this.$router
        .push({
          path: "/hospital_intro",
        })
        .catch((err) => err);
      this.$emit("changeFlag", false);
    },
    gotoIndex() {
      // 路由 去医院首页
      this.$router
        .push({
          path: "/hospital",
        })
        .catch((err) => err);
      this.$emit("changeFlag", false);
    },
    goToVip() {
      this.$router
        .push({
          path: "/vip",
        })
        .catch((err) => err);
      this.$emit("changeFlag", false);
    },
    goToApply() {
      this.$router
        .push({
          path: "/apply_vip",
        })
        .catch((err) => err);
      this.$emit("changeFlag", false);
    },
  },
};
</script>
<style lang="stylus" scoped>
.hospital_fast_nav-container
  position fixed
  left 0
  right 0
  top 0
  bottom 0
  background #EBEBEB
  z-index 111
  .wrap
    background #fff
  .top
    display flex
    height 40px
    align-items center
    background #fff
    border-bottom 1px solid #e5e5e5
    .kind
      font-size 14px
      color #999999
      margin-left 12px
      flex 1
    .cross
      width 45px
      border-left 1px solid #e5e5e5
      height 100%
      text-align center
      font-size 15px
      line-height 40px
      color #9D9D9D
  .nav-box
    background #fff
    .title
      font-size 12px
      padding-left 12px
      line-height 41px
      color #333333
      span
        margin-left 9px
        color #999999
    .nav-ul
      font-size 0
      padding-bottom 20px
      border-bottom 1px solid #e5e5e5
      /deep/.van-grid-item__content
        background #F6F6F6
        padding 5px 8px
        border-radius 8px
  .join-btn
    width 80%
    margin 20px auto
    background #ff6600
    color #fff
    text-align center
    height 50px
    line-height 50px
    font-size 15px
    position relative
    border-radius 8px
    .free
      position absolute
      right 6px
      top 6px
      font-size 12px
      line-height 12px
  .know-vip
    color #155BBB
    font-size 12px
    margin 20px 0
    text-align center
  .go-index
    position absolute
    bottom 40px
    left 50%
    transform translateX(-50%)
    display flex
    color #155BBB
    font-size 12px
    border 1px solid #155BBB
    border-radius 4px
    padding 0 22px
    height 30px
    align-items center
    .logo
      width 20px
      height 20px
      margin-right 5px
  .joined
    color #999999
    font-size 12px
    text-align center
    margin 20px auto
</style>
