<template>
  <!-- 医院推荐的header -->
  <div class="header-container van-hairline--top van-hairline--bottom">
    <div class="left-bar" v-if="header == 'indexHeader'">
      <p class="p1">{{ navHeader }}</p>
      <van-icon name="wap-nav" class="hospital-icon" @click="showNavFast" />
    </div>
    <div class="left-bar" v-if="header == 'logoHeader'">
      <van-image class="logo" :src="require('./1.png')"></van-image>
      <div class="p2">绍兴市为农服务平台首页</div>
    </div>
    <div class="left-bar" v-if="header == 'searchHeader'">
      <van-icon name="location-o" class="address-icon" />
      <div class="address">{{ address }}</div>
      <van-icon name="search" class="search" @click="goToSearchHospital" />
    </div>
    <div class="left-bar" v-if="
        header != 'indexHeader' &&
          header != 'logoHeader' &&
          header != 'searchHeader'">
      <slot></slot>
    </div>
    <div class="right-nav van-hairline--left">
      <div class="index-icon">
        <van-icon name="wap-home-o" @click="goToIndex" />
      </div>
      <div class="fast-nav-icon">
        <van-icon name="qr" @click="rightIcon" />
      </div>
    </div>
    <fastNav :showFlag="flag" @changeFlag="closeFast" :user="user"></fastNav>
    <hospitalFastNav :showFlag="flagHospital" @changeFlag="close" :importuser="user.importuser"></hospitalFastNav>
  </div>
</template>
<script>
import fastNav from "@/components/fast_nav/fast_nav";
import hospitalFastNav from "@/components/hospital_fast_nav/hospital_fast_nav";
import { mapState } from "vuex";

export default {
  name: "hospitalHeaders",
  components: { fastNav, hospitalFastNav },
  props: {
    header: {
      type: String,
      default: "indexHeader",
    },
    navHeader: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      flag: false,
      flagHospital: false,
      user: {},
    };
  },
  computed: {
    ...mapState(["mid", "uid", "initMid"]),
  },
  watch: {},
  mounted() {
    this.getUserInfo();
  },
  destroyed() {},
  methods: {
    getUserInfo() {
      this.$axios
        .fetchPost("Mobile/User/userCenter", {
          uId: this.uid,
          mId: this.initMid,
        })
        .then((res) => {
          if (res.data.code == 0) {
            this.user = res.data.data;
          }
        });
    },
    rightIcon() {
      this.flag = true;
      this.$emit("rightIcon");
    },
    closeFast() {
      this.$emit("clickFastRightIcon");
      // 主要二级快速导航关闭
      this.flag = false;
    },
    showNavFast() {
      // 打开医院快速导航
      this.flagHospital = true;
    },
    close(boolean) {
      // 关闭医院快速导航
      this.flagHospital = boolean;
    },
    goToIndex() {
      this.$router
        .push({
          path: "/index",
        })
        .catch((err) => err);
    },
    goToSearchHospital() {
      this.$router
        .push({
          path: "/search_hospital",
          query: { location: this.address },
        })
        .catch((err) => err);
    },
  },
};
</script>
<style lang="stylus" scoped>
.header-container
  height 40px
  line-height 40px
  display flex
  background #FFFFFF
  position fixed
  top 0
  right 0
  left 0
  z-index 4
  .left-bar
    flex 1
    display flex
    align-items center
    .p1
      font-size 15px
      color #333
      margin-left 12px
    .hospital-icon
      font-size 18px
      margin-left 10px
      margin-top -2px
      color #333
    .logo
      width 20px
      height 20px
      margin-left 12px
      margin-right 10px
    .p2
      font-size 15px
      color #155BBB
    .address-icon
      font-size 16px
      margin-left 15px
      color #9D9D9D
      margin-right 6px
    .address
      font-size 15px
      color #999999
      margin-right 25px
    .search
      font-size 20px
      color #9D9D9D
  .right-nav
    width 85px
    display flex
    justify-content space-around
    color #9D9D9D
    .index-icon
      display inline-block
      font-size 20px
    .fast-nav-icon
      display inline-block
      font-size 20px
    .van-icon
      line-height inherit
  .no_index_header
    flex 1
    display flex
    align-items center
    color #155BBB
    .logo
      width 20px
      height 20px
      margin-left 12px
      margin-right 10px
</style>
