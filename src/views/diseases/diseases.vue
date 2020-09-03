<template>
  <div class="diseases-container">
    <Header header="x"></Header>
    <div class="title" @click="showBox">蔬菜虫害
      <van-icon name="arrow-down" class="down" />
    </div>
    <div class="my-container"></div>
    <van-popup v-model="show" :get-container="getContainer" class="pop" :overlay="false" closeable>
      <div class="list">
        <div class="item">蔬菜虫害</div>
        <div class="item">蔬菜病害</div>
      </div>
      <div class="list">
        <div class="item">果树虫害</div>
        <div class="item">果树病害</div>
      </div>
      <div class="list list2">
        <div class="item">经济作物虫害</div>
        <div class="item">经济作物病害</div>
      </div>
      <div class="list list2">
        <div class="item">粮食作物虫害</div>
        <div class="item">粮食作物病害</div>
      </div>
      <div class="list">
        <div class="item">杂草识别</div>
      </div>
    </van-popup>
    <ul class="diseases-ul">
      <li v-for="item in 4" :key="item">
        <div class="wrap">
          <van-image class="img"></van-image>
          <p class="p1">大地老虎</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import Header from "@/components/hospital_header/hospital_header";
export default {
  name: "diseases",
  components: { Header },
  props: {},
  data() {
    return { show: false };
  },
  computed: {},
  watch: {},
  mounted() {},
  destroyed() {},
  methods: {
    // 返回一个特定的 DOM 节点，作为挂载的父节点
    getContainer() {
      return document.querySelector(".my-container");
    },
    showBox() {
      this.show = true;
    },
  },
};
</script>
<style lang="stylus" scoped>
.diseases-container
  position relative
  & > .title
    position absolute
    top 8px
    left 12px
    color #155BBB
    z-index 1
    width 200px
  .pop
    width 100%
    height 200px
    top 141px
    padding 15px
    .list
      margin-bottom 15px
      color #333333
      font-size 15px
      & > .item
        padding 5px 9px
        display inline-block
        background #F6F6F6
        border-radius 4px
        margin-right 15px
      &.list2
        & > .item
          padding 5px 15px
  .diseases-ul
    padding-left 12px
    font-size 0
    margin-top 10px
    li
      width 50%
      padding-right 12px
      display inline-block
      margin-bottom 20px
      .wrap
        .img
          width 100%
          height 127px
          background #FFDCC4
        .p1
          height 48px
          line-height 48px
          color #333
          font-size 15px
          padding-left 10px
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
          background #fff
</style>
