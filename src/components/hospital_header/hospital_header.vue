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
          header != 'searchHeader'
      ">
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
    <fastNav :showFlag="flag" @changeFlag="closeFast" :user="user"></fastNav>
    <hospitalFastNav :showFlag="flagHospital" @changeFlag="close" :importuser="user.importuser"></hospitalFastNav>
  </div>
</template>
<script>
import fastNav from "@/components/fast_nav/fast_nav";
import hospitalFastNav from "@/components/hospital_fast_nav/hospital_fast_nav";
import { mapState } from "vuex";
import AMapLoader from "@amap/amap-jsapi-loader";
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
      user: {},
      address: "",
    };
  },
  computed: {
    ...mapState(["mid", "uid"]),
  },
  watch: {},
  mounted() {
    this.getUserInfo();
    let that = this;
    AMapLoader.load({
      key: "23a2a13dc7fdd9a8af2ec7683b2f333e&AMap.CitySearch", // 申请好的Web端开发者Key，首次调用 load 时必填
      version: "1.4.15", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: ["AMap.CitySearch"], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      Loca: {
        // 是否加载 Loca， 缺省不加载
        version: "1.3.2", // Loca 版本，缺省 1.3.2
      },
    })
      .then((AMap) => {
        var citysearch = new AMap.CitySearch();
        //自动获取用户IP，返回当前城市
        citysearch.getLocalCity(function (status, result) {
          if (status === "complete" && result.info === "OK") {
            if (result && result.city && result.bounds) {
              var cityinfo = result.city;
              // var citybounds = result.bounds;
              that.address = cityinfo;
              //地图显示当前城市
            }
          } else {
            that.address = result.info;
          }
        });
      })
      .catch((e) => {
        console.log(e);
      });
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
