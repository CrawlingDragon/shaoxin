<template>
  <!-- 医院推荐的header -->
  <div class="header-container van-hairline--top van-hairline--bottom">
    <div class="left-bar" v-if="header == 'indexHeader'">
      <p class="p1">{{navHeader}}</p>
      <van-icon name="wap-nav" class="hospital-icon" @click="showNavFast" />
    </div>
    <div class="left-bar" v-if="header == 'logoHeader'">
      <van-image class="logo" :src="require('./1.png')"></van-image>
      <div class="p2">绍兴市为农服务平台首页</div>
    </div>
    <div class="left-bar" v-if="header == 'searchHeader'">
      <van-icon name="location-o" class="address-icon" />
      <div class="address">柯桥区</div>
      <van-icon name="search" class="search" />
    </div>
    <div class="left-bar" v-if="header != 'indexHeader' && header != 'logoHeader' && header != 'searchHeader'">
      <slot></slot>
    </div>
    <div class="right-nav van-hairline--left">
      <div class="index-icon">
        <van-icon name="wap-home-o" @click="goToIndex" />
      </div>
      <div class="fast-nav-icon">
        <van-icon name="qr" @click="flag = true" />
      </div>
    </div>
    <fastNav :showFlag="flag" @changeFlag="closeFast"></fastNav>
    <hospitalFastNav :showFlag="flagHospital" @changeFlag="close"></hospitalFastNav>
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
  },
  data() {
    return {
      flag: false,
      flagHospital: false,
    };
  },
  computed: {
    ...mapState(["mid"]),
  },
  watch: {},
  mounted() {},
  destroyed() {},
  methods: {
    closeFast() {
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
          path: "/",
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
