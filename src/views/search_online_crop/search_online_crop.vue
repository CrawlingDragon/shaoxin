<template>
  <div class="searchOnlineCrop-container">
    <Header :indexHeader="false"></Header>
    <div class="title">共250次{{crop}}网诊记录</div>
    <ul class="crop-ul">
      <li v-for="item in 3" :key="item">
        <OnlineItem></OnlineItem>
      </li>
    </ul>
  </div>
</template>
<script>
import Header from "@/components/header/header";
import OnlineItem from "@/components/online_item/online_item";

export default {
  name: "searchOnlineCrop",
  metaInfo() {
    return {
      title: this.crop + "搜索结果",
    };
  },
  components: { Header, OnlineItem },
  props: {},
  data() {
    return {
      crop: "xx",
    };
  },
  computed: {},
  watch: {},
  mounted() {},
  destroyed() {},
  methods: {},
};
</script>
<style lang="stylus" scoped>
.searchOnlineCrop-container
  .title
    padding 21px 0 15px 12px
    font-size 14px
    color #999999
  .crop-ul
    padding-left 12px
    background #fff
    li
      border-bottom 1px solid #e5e5e5
</style>
