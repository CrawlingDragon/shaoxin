<template>
  <div class="index_online-container">
    <Header></Header>
    <div class="choose-box">
      <div class="back" @click="goBack"></div>
      <div class="all" @click="openBox">全部
        <van-icon name="arrow-down" class="down" />
      </div>
      <div class="crop" @click="goToChooseCrop">作物
        <van-icon name="arrow-down" class="down" />
      </div>
      <div class="address-box" v-show="addressFlag">
        <div class="item">全部地区</div>
        <div class="item">绍兴市</div>
        <van-icon name="cross" class="cross" @click="addressFlag = false" />
      </div>
    </div>
    <div class="online-box">
      <ul class="o-ul">
        <li v-for="item in 3" :key="item.id">
          <OnlineItem :list="item" @preImage="preverImg"></OnlineItem>
        </li>
      </ul>
    </div>
    <Foot></Foot>
  </div>
</template>
<script>
import Header from "@/components/header/header.vue";
import Foot from "@/components/foot/foot";
import OnlineItem from "@/components/online_item/online_item";
export default {
  name: "indexOnline",
  components: { Header, Foot, OnlineItem },
  props: {},
  data() {
    return {
      addressFlag: false,
    };
  },
  computed: {},
  watch: {},
  mounted() {},
  destroyed() {},
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    openBox() {
      this.addressFlag = !this.addressFlag;
    },
    goToChooseCrop() {
      this.$router.push({
        path: "/choose_crop",
      });
    },
  },
};
</script>
<style lang="stylus" scoped>
.index_online-container
  .choose-box
    height 40px
    display flex
    align-items center
    background #fff
    border-bottom 1px solid #e5e5e5
    position relative
    .back
      width 25px
      height 25px
      background url('./70.png') no-repeat
      background-size 25px 25px
      background-position center
      padding 0 13px
      box-sizing content-box
      margin-right 20px
    .all
      font-size 15px
      color #333
      padding-right 34px
      line-height 40px
      display flex
      align-items center
      .down
        margin-left 5px
        font-size 18px
        color #999999
    .crop
      font-size 15px
      color #333
      padding-right 34px
      line-height 40px
      display flex
      align-items center
      .down
        margin-left 5px
        font-size 18px
        color #999999
    .address-box
      position absolute
      left 0
      right 0
      height 75px
      bottom -76px
      background #fff
      display flex
      align-items center
      padding-left 12px
      border-bottom 1px solid #e5e5e5
      z-index 11
      .item
        width 75px
        background #F6F6F6
        height 25px
        color #333333
        border-radius 8px
        font-size 15px
        text-align center
        line-height 25px
        margin-right 15px
      .cross
        font-size 28px
        position absolute
        right 15px
        top 14px
        color #9D9D9D
  .online-box
    background #fff
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
