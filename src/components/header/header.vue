<template>
  <!-- 首页推荐的header -->
  <div class="header-container van-hairline--top van-hairline--bottom">
    <div class="search-icon" v-if="indexHeader" @click="goToSearch">
      <van-icon name="search" />
    </div>
    <div class="tabbar" v-if="indexHeader">
      <div class="item" :class="{'active':tabbarActive == 0}" @click="goToIndex">推荐</div>
      <div class="item" :class="{'active':tabbarActive == 1}" @click="goToOnline">网诊</div>
    </div>
    <div class="no_index_header" v-if="!indexHeader">
      <van-image :src="require('./1.png')" class="logo"></van-image>
      绍兴市为农服务平台首页
    </div>
    <div class="right-nav van-hairline--left">
      <div class="index-icon" @click="goToIndex">
        <van-icon name="wap-home-o" />
      </div>
      <div class="fast-nav-icon" @click="openFastNav">
        <van-icon name="qr" />
      </div>
    </div>
    <fastNav :showFlag="fastNavShowFlag" @changeFlag="closeFaseNav" :user="user"></fastNav>
  </div>
</template>
<script>
import fastNav from "@/components/fast_nav/fast_nav";
import { mapState } from "vuex";
export default {
  name: "headers",
  components: { fastNav },
  props: {
    indexHeader: {
      type: Boolean,
      default: true,
    },
    tabbarActive: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      fastNavShowFlag: false,
      user: {},
    };
  },
  computed: { ...mapState(["uid"]) },
  watch: {},
  mounted() {
    this.getUserInfo();
  },
  destroyed() {},
  methods: {
    getUserInfo() {
      this.$axios
        .fetchPost("Mobile/User/userCenter", { uId: this.uid })
        .then((res) => {
          if (res.data.code == 0) {
            this.user = res.data.data;
          }
        });
    },
    goToSearch() {
      // 路由  搜索网诊
      this.$router
        .push({
          path: "/search_online",
        })
        .catch((err) => err);
      this.fastNavShowFlag = false;
    },
    goToOnline() {
      // 路由  网诊
      this.$router
        .push({
          path: "/index_online",
        })
        .catch((err) => err);
      this.fastNavShowFlag = false;
    },
    goToIndex() {
      // 路由 首页
      this.$router
        .push({
          path: "/index",
        })
        .catch((err) => err);
      this.fastNavShowFlag = false;
    },
    openFastNav() {
      // 打开快速导航
      this.fastNavShowFlag = !this.fastNavShowFlag;
    },
    closeFaseNav(boolean) {
      // 关闭快速导航
      this.fastNavShowFlag = boolean;
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
  .search-icon
    margin-left 22px
    margin-right 20px
    font-size 20px
    color #9D9D9D
    .van-icon
      line-height inherit
  .tabbar
    font-size 15px
    line-height inherit
    flex 1
    & > .item
      display inline-block
      color #999999
      margin-right 20px
      box-sizing border-box
      &.active
        color #155BBB
        font-size 17px
        border-bottom 2px solid #155BBB
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
