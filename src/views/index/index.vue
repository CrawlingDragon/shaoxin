<template>
  <div class="index-container">
    <Header></Header>
    <div class="swiper-box">
      <van-swipe :autoplay="3000" style="height: 130px;">
        <van-swipe-item v-for="image in swiperArr" :key="image.id" fit="cover">
          <van-image fit="cover" :src="image.thumb" lazy-load />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="nav-box">
      <div class="item" @click="goToAnswer">
        <div class="icon i1"></div>
        <p>找答案</p>
      </div>
      <div class="item">
        <div class="icon i2"></div>
        <p>找农资</p>
      </div>
      <div class="item" @click="goToExpert">
        <div class="icon i3"></div>
        <p>找专家</p>
      </div>
      <div class="item" @click=" goToBase">
        <div class="icon i4"></div>
        <p>找基地</p>
      </div>
      <div class="item" @click="goToLive">
        <div class="icon i5"></div>
        <p>直播</p>
      </div>
    </div>
    <div class="hospital-box">
      <div class="title">
        推荐医院<span>加入新型庄稼医院，免费享受会员服务</span>
      </div>
      <ul class="h-ul">
        <li v-for="item in hospitalArr" :key="item.id">
          <RecommendHospital :list="item"></RecommendHospital>
        </li>
      </ul>
    </div>
    <div class="look-bar" @click="lookMoreHospital">找医院 ></div>
    <div class="vip-box">
      <img src="./49.png" alt="">
    </div>
    <div class="online-box">
      <div class="title">推荐专家</div>
      <ul class="e-ul">
        <li v-for="item in expertArr" :key="item.id">
          <RecommendExpert :list="item"></RecommendExpert>
        </li>
      </ul>
    </div>
    <div class="look-bar" @click="goToExpert">找专家 ></div>
    <div class="online-box">
      <div class="title">网诊</div>
      <ul class="o-ul">
        <li v-for="item in onlineArr" :key="item.id">
          <OnlineItem :list="item" @preImage="preverImg"></OnlineItem>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Header from "@/components/header/header.vue";
import RecommendHospital from "@/components/recommend_hospital/recommend_hospital";
import RecommendExpert from "@/components/recommend_expert/recommend_expert";
import OnlineItem from "@/components/online_item/online_item";
import { ImagePreview } from "vant";
export default {
  metaInfo: {
    title: "绍兴市为农服务平台",
  },
  name: "index",
  components: {
    Header,
    RecommendHospital,
    OnlineItem,
    RecommendExpert,
    [ImagePreview.Component.name]: ImagePreview.Component,
  },
  props: {},
  data() {
    return {
      swiperArr: [],
      hospitalArr: [],
      expertArr: [],
      onlineArr: [],
    };
  },
  created() {},
  computed: {},
  watch: {},
  mounted() {
    this.getIndexData();
  },
  destroyed() {},
  methods: {
    getIndexData() {
      // 获取首页数据
      this.$axios
        .fetchPost("/Mobile/Index/index", { mId: 56915 })
        .then((res) => {
          if (res.data.code == 0) {
            this.swiperArr = res.data.data.list_ad;
            this.hospitalArr = res.data.data.list_mpublic;
            this.expertArr = res.data.data.list_expert;
            this.onlineArr = res.data.data.list_wen;
          }
        });
    },
    goToLive() {
      this.$router.push({ path: "/live" });
    },
    preverImg(item) {
      //网诊的图片预览
      ImagePreview({
        images: item.arr,
        startPosition: item.index,
        closeable: true,
      });
    },
    goToAnswer() {
      //  去首页的的网诊
      // this.$router.push({ path: "/me_base" }).catch((err) => err);
    },
    goToExpert() {
      // 找专家
      this.$router
        .push({ path: "/look_expert", query: { mid: "" } })
        .catch((err) => err);
    },
    goToBase() {
      // 找基地
      this.$router.push({ path: "/me_base" }).catch((err) => err);
    },
    lookMoreHospital() {
      // 查找更多的医院
      this.$router.push({ path: "/into_hospital" }).catch((err) => err);
    },
  },
};
</script>
<style lang="stylus" scoped>
.index-container
  padding-bottom 50px
  .swiper-box
    width 100%
    margin-top 10px
    img
      display block
      width 100%
      height 100%
  .nav-box
    height 100px
    display flex
    align-items center
    background #FFFFFF
    margin-bottom 10px
    .item
      flex 1
      text-align center
      .icon
        width 40px
        height 40px
        color #343434
        font-size 14px
        margin 0 auto
        margin-bottom 10px
        &.i1
          background url('./1.png') no-repeat center
          background-size cover
        &.i2
          background url('./2.png') no-repeat center
          background-size cover
        &.i3
          background url('./3.png') no-repeat center
          background-size cover
        &.i4
          background url('./4.png') no-repeat center
          background-size cover
        &.i5
          background url('./5.png') no-repeat center
          background-size cover
  .hospital-box
    background #fff
    .title
      height 40px
      padding-left 12px
      border-bottom 1px solid #E5E5E5
      line-height 40px
      font-size 17px
      color #343434
      overflow hidden
      box-sizing border-box
      span
        margin-left 10px
        color #9A9A9A
        font-size 12px
    .h-ul
      padding-top 10px
      padding-bottom 10px
      // display flex
      // flex-wrap wrap
      column-count 2
      column-gap 0
      margin-left 12px
      border-bottom 1px solid #e5e5e5
      li
        break-inside avoid
        padding-right 12px
        margin-bottom 10px
  .look-bar
    height 40px
    text-align center
    color #165CBC
    font-size 12px
    line-height 40px
    background #fff
    border-bottom 1px solid #e5e5e5
  .vip-box
    width 100%
    height 185px
    margin-bottom 10px
    padding 5px 12px
    background #fff
    img
      display block
      width 100%
      height 100%
  .online-box
    background #fff
    margin-top 10px
    .title
      font-size 17px
      color #343434
      height 40px
      line-height 40px
      padding-left 12px
      border-bottom 1px solid #e5e5e5
    .o-ul
      margin-left 12px
      li
        width 100%
        border-bottom 1px solid #e5e5e5
        &:last-child
          border none
    .e-ul
      padding-top 10px
      display flex
      flex-wrap wrap
      margin-left 12px
      border-bottom 1px solid #e5e5e5
      padding-bottom 5px
      li
        width 50%
        padding-right 12px
        margin-bottom 10px
</style>
