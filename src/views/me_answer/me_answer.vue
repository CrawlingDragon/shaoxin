<template>
  <div class="me_answer-container">
    <Header :indexHeader="false"></Header>
    <van-tabs v-model="active" sticky color="#155BBB" title-active-color="#155BBB" class="tabs">
      <van-tab title="我问的" class="tab">

        <div class="item" v-for="item in ask" :key="item.id">
          <OnlineItem :list="item"></OnlineItem>
        </div>
        <van-empty description="暂无数据" v-if="noData1"></van-empty>
      </van-tab>
      <van-tab title="我答的" class="tab">
        <div class="item" v-for="item in answer" :key="item.id">
          <OnlineItem :list="item"></OnlineItem>
        </div>
        <van-empty description="暂无数据" v-if="noData2"></van-empty>
      </van-tab>
      <van-tab title="咨询我的" class="tab" v-if="identity == 1">
        <div class="item" v-for="item in information" :key="item.id">
          <OnlineItem :list="item"></OnlineItem>
        </div>
        <van-empty description="暂无数据" v-if="noData3"></van-empty>
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
      identity: 0,
      noData1: false,
      noData2: false,
      noData3: false,
    };
  },
  computed: {
    ...mapState(["uid", "mid"]),
  },
  watch: {},
  created() {},
  mounted() {
    this.myAsk();
    this.myAnswer();
    this.myInformation();
    this.getUserInfo();
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
    getUserInfo() {
      this.$axios
        .fetchPost("Mobile/User/userCenter", {
          uId: this.uid,
          mId: this.initMid,
        })
        .then((res) => {
          if (res.data.code == 0) {
            this.user = res.data.data;
            this.identity = res.data.data.this.identity;
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
