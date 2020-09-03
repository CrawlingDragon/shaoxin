<template>
  <div class="zuozhen_list-container">
    <Header :indexHeader="false"></Header>
    <ul>
      <li v-for="item in 3" :key="item">
        <p class="p1">白菜出现这种情况什么病？怎么用药</p>
        <p class="p2">白菜·坐诊·2018-10-20 <span>黄则黄桃黄桃医院</span></p>
      </li>
    </ul>
  </div>
</template>
<script>
import Header from "@/components/header/header";
export default {
  name: "wholeZuoZhenList",
  components: { Header },
  props: {},
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
.zuozhen_list-container
  ul
    margin-top 10px
    padding-left 12px
    background #fff
    li
      height 75px
      padding 17px 12px
      padding-left 0
      background #fff
      border-bottom 1px solid #e5e5e5
      &:last-child
        border none
      .p1
        color #000000
        font-size 15px
        margin-bottom 5px
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
      .p2
        color #999999
        font-size 12px
        span
          float right
</style>
