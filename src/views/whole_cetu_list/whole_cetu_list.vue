<template>
  <div class="whole_cetu_list-container">
    <Header :indexHeader="false"></Header>
    <ul class="cetu_ul">
      <li v-for="item in 6" :key="item">
        <div class="top">
          <div class="title">
            菠菜测土菠菜测土菠菜测土菠菜测土菠菜测土菠菜测土
          </div>
          <div class="time">2019-10-20</div>
        </div>
        <div class="bottom">黄泽黄桃专科医院</div>
      </li>
    </ul>
  </div>
</template>
<script>
import Header from "@/components/header/header";
export default {
  name: "whole_cetu_list",
  components: { Header },
  props: {},
  metaInfo() {
    return {
      title: "ss医院",
    };
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {},
  destroyed() {},
  methods: {},
};
</script>
<style lang="stylus" scoped>
.whole_cetu_list-container
  .cetu_ul
    padding-left 12px
    background #fff
    margin-top 10px
    li
      border-bottom 1px solid #e5e5e5
      height 65px
      padding-top 10px
      &:last-child
        border none
      .top
        display flex
        align-items center
        width 100%
        .title
          min-width 0
          flex 1
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
          font-size 15px
        .time
          width 100px
          margin-left 15px
          font-size 12px
          color #9A9A9A
      .bottom
        width 100%
        font-size 12px
        color #9A9A9A
        margin-top 5px
</style>
