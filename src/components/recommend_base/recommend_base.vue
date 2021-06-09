<template>
  <div class="recommend_base-container" @click="goToDetail(list.qrcode)">
    <!-- 192 -->
    <van-image class="img" :src="list.logo" fit="cover"></van-image>
    <div class="info-bar">
      <div class="name">{{ list.companyname }}</div>
      <div class="scale">规模：{{ list.guimo }}</div>
      <div class="crop">{{ list.zwtype }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "recommend_base",
  components: {},
  props: {
    list: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {},
  destroyed() {},
  methods: {
    goToDetail(href) {
      window.location.href = href;
    }
  }
};
</script>
<style lang="stylus" scoped>
.recommend_base-container
    font-size 0
    .img
        width 100%
        height 140px
        background #999999
    .info-bar
        background #F6F6F6
        height 88px
        padding 0 10px
        .name
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #333333;
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
            word-break break-all
            padding 8px 0
        .scale,.crop
            font-size: 12px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #999999;
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
            word-break break-all
            margin-bottom 5px
</style>
