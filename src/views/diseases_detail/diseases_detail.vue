<template>
  <div class="diseases_detail-container">
    <Header :indexHeader="false"></Header>
    <div class="content">
      <div class="title">沟金针虫</div>
      <div class="text"></div>
    </div>
    <div class="next">下一篇: 葡萄大褐斑病 ></div>
  </div>
</template>
<script>
import Header from "@/components/header/header";
export default {
  name: "diseasesDetail",
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
.diseases_detail-container
  .content
    margin-top 10px
    background #fff
    padding 20px 12px
    .title
      color #333333
      font-size 17px
      padding 10px 0 15px
  .next
    text-align right
    padding 20px 12px
    color #155BBB
    font-size 12px
</style>
