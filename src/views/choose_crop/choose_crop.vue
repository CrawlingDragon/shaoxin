<template>
  <div class="choose_crop-container">
    <form action="/" class="from">
      <van-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch" @cancel="onCancel" />
    </form>
    <div class="history-box">
      <div class="title">当前选择：全部作物</div>
      <div class="history-ul">
        <div class="small-title">最近选择/全部作物</div>
        <li>全部作物</li>
        <li>西蓝花</li>
        <li>菠萝菜用大豆</li>
        <li>草莓</li>
        <li>芦笋</li>
        <li>菜用大豆</li>
      </div>
    </div>
    <van-index-bar class="bar">
      <van-index-anchor index="A" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-index-anchor index="B" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-index-anchor index="c" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-index-anchor index="d" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-index-anchor index="e" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-index-anchor index="f" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
    </van-index-bar>
  </div>
</template>
<script>
export default {
  name: "chooseCrop",
  components: {},
  props: {},
  data() {
    return { value: "" };
  },
  computed: {},
  watch: {},
  mounted() {},
  destroyed() {},
  methods: {
    onSearch(val) {
      console.log("object :>> ", val);
    },
    onCancel() {
      console.log("object :>> ");
    },
  },
};
</script>
<style lang="stylus" scoped>
.choose_crop-container
  padding-top 54px
  .from
    position fixed
    top 0px
    left 0
    right 0
    z-index 1111
  .history-box
    margin-top 10px
    .title
      height 40px
      line-height 40px
      color #333333
      font-size 15px
      padding-left 12px
      background #fff
    .history-ul
      padding-left 12px
      font-size 0
      .small-title
        font-size 12px
        color #999999
        line-height 12px
        padding 15px 0
      li
        min-width 65px
        padding 0 5px
        height 25px
        line-height 25px
        color #333333
        background #fff
        font-size 15px
        display inline-block
        margin-right 15px
        margin-bottom 10px
        border-radius 8px
        text-align center
</style>
