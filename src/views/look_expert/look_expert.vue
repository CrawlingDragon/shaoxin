<template>
  <div class="look_expert-container">
    <Header :indexHeader="false"></Header>
    <ul class="expert-ul">
      <li v-for="item in list" :key="item">
        <RecommendExpert :list="item"></RecommendExpert>
      </li>
    </ul>
  </div>
</template>
<script>
import Header from "@/components/header/header";
import RecommendExpert from "@/components/recommend_expert/recommend_expert";

export default {
  metaInfo() {
    return {
      title: "寻找专家",
    };
  },
  name: "lookExpert",
  components: { Header, RecommendExpert },
  props: {},
  data() {
    return {
      mid: this.$route.query.mid,
      list: [],
    };
  },
  computed: {},
  watch: {
    mid() {
      this.mid = this.$route.query.mid;
    },
  },
  mounted() {
    this.getExpertList();
  },
  destroyed() {},
  methods: {
    getExpertList() {
      // 获取专家列表
      this.$axios
        .fetchPost("/Mobile/User/expertList", { mId: "" })
        .then((res) => {
          if (res.data.code == 0) {
            console.log("this.list :>> ", res.data.data);
            this.list = res.data.data;
          }
        });
    },
  },
};
</script>
<style lang="stylus" scoped>
.look_expert-container
  .expert-ul
    margin-top 10px
    background #fff
    padding-left 12px
    column-count 2
    column-gap 0
    padding-top 10px
    padding-bottom 10px
    li
      padding-right 12px
      break-inside avoid
      margin-bottom 10px
</style>
