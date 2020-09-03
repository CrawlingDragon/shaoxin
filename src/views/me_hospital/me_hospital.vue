<template>
  <div class="me_hospital-container">
    <Header :indexHeader="false"></Header>
    <ul class="me-ul">
      <li v-for="item in 3" :key="item">
        <RecommendHospital></RecommendHospital>
      </li>
    </ul>
    <div class="title">已加入3家医院</div>
  </div>
</template>
<script>
import Header from "@/components/header/header";
import RecommendHospital from "@/components/recommend_hospital/recommend_hospital";

export default {
  name: "meHospital",
  components: { Header, RecommendHospital },
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
.me_hospital-container
  .me-ul
    padding-left 12px
    column-gap 0
    column-count 2
    background #fff
    padding-bottom 15px
    padding-top 15px
    margin-top 10px
    li
      break-inside avoid
      margin-right 12px
      margin-bottom 15px
  .title
    font-size 12px
    color #999999
    padding 15px 0
    text-align center
</style>
