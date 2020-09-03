<template>
  <div class="hospital_expert-container">
    <Header header="indexHeader" navHeader="专家"></Header>
    <ul class="expert-ul">
      <li v-for="item in list" :key="item.id">
        <RecommendExpert :list="item"></RecommendExpert>
      </li>
    </ul>
  </div>
</template>
<script>
import Header from "@/components/hospital_header/hospital_header";
import RecommendExpert from "@/components/recommend_expert/recommend_expert";
import { mapState } from "vuex";
export default {
  name: "hospitalExpert",
  components: { Header, RecommendExpert },
  props: {},
  data() {
    return {
      list: [],
    };
  },
  computed: {
    ...mapState(["mid"]),
  },
  watch: {},
  mounted() {
    this.getList();
  },
  destroyed() {},
  methods: {
    getList() {
      this.$axios
        .fetchPost("Mobile/User/expertList", { mid: this.mid })
        .then((res) => {
          if (res.data.code == 0) {
            this.list = res.data.data;
          }
        });
    },
  },
};
</script>
<style lang="stylus" scoped>
.hospital_expert-container
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
