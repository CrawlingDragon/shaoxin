<template>
  <div class="me_answer-container">
    <Header :indexHeader="false"></Header>
    <van-tabs v-model="active" sticky color="#155BBB" title-active-color="#155BBB" class="tabs">
      <van-tab title="我问的" class="tab">
        <div class="item" v-for="item in ask" :key="item">
          <OnlineItem :list="item"></OnlineItem>
        </div>
      </van-tab>
      <van-tab title="我答的" class="tab">
        <div class="item" v-for="item in answer" :key="item">
          <OnlineItem :list="item"></OnlineItem>
        </div>
      </van-tab>
      <van-tab title="咨询我的" class="tab">
        <div class="item" v-for="item in information" :key="item">
          <OnlineItem :list="item"></OnlineItem>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Header from "@/components/header/header";
import OnlineItem from "@/components/online_item/online_item";
import { mapState } from "vuex";

export default {
  name: "meAnswer",
  components: { Header, OnlineItem },
  metaInfo: {
    title: "问答管理",
  },
  props: {},
  data() {
    return {
      active: 0,
      ask: [],
      answer: [],
      information: [],
    };
  },
  computed: {
    ...mapState(["uid"]),
  },
  watch: {},
  mounted() {
    this.myAsk();
    this.myAnswer();
    this.myInformation();
  },
  destroyed() {},
  methods: {
    myAsk() {
      // 我问的
      this.$axios
        .fetchPost("/Mobile/user/getWenList", { uId: this.uid, action: "ask" })
        .then((res) => {
          if (res.data.code == 0) {
            this.ask = res.data.data;
          }
        });
    },
    myAnswer() {
      // 我答的
      this.$axios
        .fetchPost("/Mobile/user/getWenList", {
          uId: this.uid,
          action: "answer",
        })
        .then((res) => {
          if (res.data.code == 0) {
            this.answer = res.data.data;
          }
        });
    },
    myInformation() {
      // 资讯我的
      this.$axios
        .fetchPost("/Mobile/user/getWenList", { uId: this.uid, action: "tome" })
        .then((res) => {
          if (res.data.code == 0) {
            this.information = res.data.data;
          }
        });
    },
  },
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
