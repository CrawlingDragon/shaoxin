<template>
  <div class="base_detail-conatiner">
    <Header header="logoHeader"></Header>
    <div class="nav-top">
      <div class="status" :class="{'glod':base.ctype == '6','base':base.ctype == '5','none':base.ctype == '0'}">{{base.ctype == '6'?'金牌认证':(base.ctype == '5'?'普通认证':'未认证')}}</div>
      <div class="company">
        <van-image class="company-avator" round :src="base.logo"></van-image>
        <p class="name">{{base.name}}</p>
        <div class="share"></div>
      </div>
      <div class="contant-context">
        <div class="item">
          <div class="icon icon01"></div>
          <a href='tel:base.telephone' class="text" ref="tel">{{base.telephone}}</a>
          <div class="do" @click="clickTel">拨打</div>
        </div>
        <div class="item">
          <div class="icon icon02"></div>
          <van-image class="avator" round :src="base.avatar"></van-image>
          <div class="text">{{base.linkman}}</div>
          <div class="do" @click="goToPerson">查看</div>
        </div>
        <div class="item">
          <div class="icon icon03"></div>
          <div class="text1">{{base.address}}</div>
          <div class="do">查看</div>
        </div>
      </div>
    </div>
    <div class="info">
      <div class="item">
        <p class="p1">主要作物</p>
        <p class="p2">{{base.zwtype}}</p>
      </div>
      <div class="item">
        <p class="p1">基地面积</p>
        <p class="p2">{{base.guimo}}亩</p>
      </div>
      <div class="item">
        <p class="p1">服务医院</p>
        <p class="p3">{{base.mpublic}}</p>
      </div>
    </div>
    <div class="swiper-box">
      <div class="title">基地图片</div>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in base.pic" :key="item">
          <van-image :src="item" class="img"></van-image>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script>
import Header from "@/components/hospital_header/hospital_header";
export default {
  metaInfo: {
    title: "基地详情",
  },
  name: "baseDetail",
  components: { Header },
  props: {},
  data() {
    return {
      id: this.$route.query.id,
      base: "",
    };
  },
  computed: {},
  watch: {},
  mounted() {
    this.getBaseData();
  },
  destroyed() {},
  methods: {
    clickTel() {
      this.$refs.tel.click();
    },

    getBaseData() {
      // 基地详情
      this.$axios
        .fetchPost("/Mobile/Mpublic/getBaseDetail", { id: this.id })
        .then((res) => {
          if (res.data.code == 0) {
            this.base = res.data.data;
          }
        });
    },
    goToPerson() {
      // 点击去到个人主页
      this.$router.push({
        path: "/expert",
        query: { id: this.base.uid },
      });
    },
  },
};
</script>
<style lang="stylus" scoped>
.base_detail-conatiner
  .nav-top
    margin-top 10px
    background #fff
    height 195px
    position relative
    padding-top 30px
    background url('./bj.png') no-repeat
    background-size 100% 100%
    background-position center
    .status
      font-size 12px
      color #fff
      width 65px
      height 20px
      line-height 20px
      border-top-right-radius 100px
      border-bottom-right-radius 100px
      text-align center
      position absolute
      left 0
      top 5px
      background #ff6600
    .company
      display flex
      padding 0 12px 0 25px
      align-items center
      .company-avator
        width 45px
        height 45px
        margin-right 12px
      .name
        font-size 20px
        font-weight bold
        color #fff
        flex 1
        min-width 0
        line-height 24px
      .share
        width 25px
        height 24px
        margin-left 20px
        background url('./share.png') no-repeat
        background-size cover
        background-position center
    .contant-context
      background #fff
      margin 29px 27px 0
      height 190px
      background #fff
      border-radius 10px
      box-shadow 0px 2px 16px 0px rgba(122, 122, 122, 0.31)
      display flex
      flex-direction column
      padding-left 20px
      padding-top 25px
      padding-bottom 25px
      .item
        display flex
        align-items center
        font-size 17px
        color #333333
        min-width 0
        padding-right 10px
        margin-bottom 10px
        .text
          color #333333
        .icon
          margin-right 15px
        .icon01
          width 35px
          height 35px
          background url('./3.png') no-repeat
          background-size 100% 100%
          background-position center
        .icon02
          width 35px
          height 35px
          background url('./2.png') no-repeat
          background-size 100% 100%
          background-position center
        .icon03
          width 35px
          height 35px
          background url('./1.png') no-repeat
          background-size 100% 100%
          background-position center
      .do
        font-size 12px
        color #FF6600
        margin-left 10px
        width auto
      .avator
        width 30px
        height 30px
        margin-right 12px
      .text1
        flex 1
        overflow hidden
        min-width 0
        text-overflow ellipsis
  .info
    background #fff
    padding-top 100px
    border-bottom 1px solid #e5e5e5
    .item
      margin 20px 0
      width 33.33%
      display inline-block
      border-right 1px solid #e5e5e5
      text-align center
      height 75px
      padding-top 11px
      overflow hidden
      &:last-child
        border-right none
      .p1
        margin-bottom 10px
        color #666666
        font-size 14px
      .p2
        color #000000
        font-size 15px
      .p3
        width 60px
        color #155BBB
        font-size 15px
        line-height 16px
        margin 0 auto
        display inline-block
  .swiper-box
    background #fff
    padding 25px 12px 15px
    .title
      font-size 17px
      color #000000
      text-align center
      margin-bottom 15px
    .my-swipe
      width 100%
      height 200px
      .img
        display block
        width 100%
        height 100%
</style>
 