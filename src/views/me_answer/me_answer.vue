<template>
  <div class="me_answer-container">
    <Header :indexHeader="false"></Header>
    <van-tabs v-model="active" sticky color="#155BBB" title-active-color="#155BBB" class="tabs">
      <van-tab title="我问的" class="tab">
        <div class="item" v-for="item in 3" :key="item">
          <OnlineItem></OnlineItem>
        </div>
      </van-tab>
      <van-tab title="我答的" class="tab">
        <div class="item" v-for="item in 3" :key="item">
          <OnlineItem></OnlineItem>
        </div>
      </van-tab>
      <van-tab title="咨询我的" class="tab">
        <div class="item" v-for="item in 3" :key="item">
          <OnlineItem></OnlineItem>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Header from "@/components/header/header";
import OnlineItem from "@/components/online_item/online_item";

export default {
  name: "meAnswer",
  components: { Header, OnlineItem },
  props: {},
  data() {
    return {
      active: 0,
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
.me_answer-container
  .tabs
    .tab
      margin-top 10px
      background #fff
      padding 0 12px
      .item
        border-bottom 1px solid #e5e5e5
        &:last-child
          border none
</style>
