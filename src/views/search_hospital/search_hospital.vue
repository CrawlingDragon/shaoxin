<template>
  <div class="search_hospital-container">
    <Header :indexHeader="false"></Header>
    <form action="/">
      <van-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch" @cancel="onCancel" />
    </form>
    <div class="hot">
      <div class="title">热搜词</div>
      <ul class="hot-ul">
        <li v-for="item in hot" :key="item.title" @click="goToHospital(item.mid)">
          {{ item.title }}
        </li>
      </ul>
    </div>
    <div class="hot" v-if="hispital.length != 0">
      <div class="title">历史搜索</div>
      <ul class="history-ul">
        <li v-for="item in hispital" :key="item.title" @click="goToHospital(item.mid)">
          {{ item.title }}
        </li>
      </ul>
      <div class="clear">清空历史</div>
    </div>
    <div class="result-box">
      <div class="title">搜索结果</div>
      <ul>
        <li v-for="item in list" :key="item.mid" @click="goToHospital(item.mid)">
          <van-image class="img" :src="item.logo" fit="cover"></van-image>
          <div class="right">
            <div class="name">
              {{ item.title }}<span v-show="item.isstore == 1">实体店</span>
            </div>
            <div class="knid">科室：{{ item.zuowu }}</div>
          </div>
        </li>
      </ul>
    </div>
    <van-empty image="error" description="未搜索到符合条件的内容" v-if="noData" />
  </div>
</template>
<script>
import Header from "@/components/header/header";
import { mapState, mapMutations } from "vuex";
export default {
  name: "searchHospital",
  metaInfo: {
    title: "搜索网诊",
  },
  components: { Header },
  props: {},
  data() {
    return {
      value: "",
      location: this.$route.query.location,
      list: [],
      hispital: [],
      hot: [],
      noData: false,
    };
  },
  computed: {
    ...mapState(["uid"]),
  },
  watch: {},
  mounted() {
    this.getHispital();
    this.gerHot();
  },
  destroyed() {},
  methods: {
    ...mapMutations(["setMid"]),
    onSearch(val) {
      this.getSearchresult(val);
    },
    onCancel() {
      this.$router.push({ path: "/into_hospital" });
    },
    getSearchresult(keyword) {
      this.noData = false;
      this.$axios
        .fetchPost("Mobile/Entrance/lists", {
          keyword: keyword,
          location: this.location,
        })
        .then((res) => {
          if (res.data.code == 0) {
            this.list = res.data.data;
            if (res.data.data.length == 0) {
              this.noData = true;
            }
          }
        });
    },
    getHispital() {
      this.$axios
        .fetchPost("Mobile/Entrance/getHistory", { uId: this.uid })
        .then((res) => {
          if (res.data.code == 0) {
            this.hispital = res.data.data;
          }
        });
    },
    gerHot() {
      this.$axios.fetchPost("Mobile/Entrance/getHotwords").then((res) => {
        if (res.data.code == 0) {
          this.hot = res.data.data;
        }
      });
    },
    goToHospital(mid) {
      this.setMid(mid);
      this.$router.push({
        path: "/hospital",
      });
    },
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
