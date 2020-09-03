<template>
  <div class="search_hospital-container">
    <Header :indexHeader="false"></Header>
    <form action="/">
      <van-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch" @cancel="onCancel" />
    </form>
    <div class="hot">
      <div class="title">热搜词</div>
      <ul class="hot-ul">
        <li>黄泽黄桃专科医院</li>
        <li>嵊州蔬菜专科医院 </li>
      </ul>
    </div>
    <div class="hot">
      <div class="title">历史搜索</div>
      <ul class="history-ul">
        <li>安吉新型庄稼医院</li>
        <li>秀洲</li>
      </ul>
      <div class="clear">清空历史</div>
    </div>
    <div class="result-box">
      <div class="title">搜索结果</div>
      <ul>
        <li v-for="item in 4" :key="item">
          <van-image class="img"></van-image>
          <div class="right">
            <div class="name">黄泽黄桃专科医院<span>实体店</span></div>
            <div class="knid">科室：黄桃 </div>
          </div>
        </li>
      </ul>
    </div>
    <van-empty image="error" description="未搜索到符合条件的内容" />
  </div>
</template>
<script>
import Header from "@/components/header/header";
export default {
  name: "searchHospital",
  metaInfo: {
    title: "搜索网诊",
  },
  components: { Header },
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
      console.log("val :>> ", val);
    },
    onCancel() {},
  },
};
</script>
<style lang="stylus" scoped>
.search_hospital-container
  color #333
  .hot
    padding-left 12px
    position relative
    .title
      color #999
      font-size 12px
      margin-bottom 15px
      margin-top 15px
    .hot-ul
      li
        display inline-block
        padding 5px 12px
        background #E2E2E2
        color #333333
        font-size 15px
        border-radius 8px
        margin-right 10px
    .clear
      position absolute
      right 0
      top 0
      font-size 12px
      color #333333
      right 12px
    .history-ul
      li
        margin-right 30px
        display inline-block
  .result-box
    .title
      color #999
      font-size 12px
      margin-bottom 15px
      margin-top 15px
      margin-left 12px
    ul
      li
        background #fff
        border-bottom 1px solid #e5e5e5
        padding 15px 12px
        display flex
        align-items center
        &:last-child
          border none
        .img
          width 60px
          height 60px
          margin-right 10px
        .right
          .name
            color #333333
            font-size 18px
            display flex
            align-items center
            span
              padding 2px 12px
              color #fff
              background linear-gradient(-30deg, rgba(255, 102, 0, 1), rgba(255, 163, 44, 1))
              font-size 12px
              border-radius 100px
              margin-left 15px
          .knid
            color #999999
            font-size 12px
            margin-top 6px
</style>
