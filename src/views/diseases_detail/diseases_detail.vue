<template>
  <div class="diseases_detail-container">
    <Header :indexHeader="false"></Header>
    <div class="content">
      <div class="title">{{detail.title}}</div>
      <div class="text" v-html="detail.content"></div>
    </div>
    <div class="next" @click="goTonext">下一篇: {{detail.next_page.title}} ></div>
  </div>
</template>
<script>
import Header from "@/components/header/header";
export default {
  name: "diseasesDetail",
  components: { Header },
  metaInfo: {
    title: "病虫害详情",
  },
  props: {},
  data() {
    return {
      catid: this.$route.query.catid,
      id: this.$route.query.id,
      detail: "",
    };
  },
  computed: {},
  watch: {
    $route() {
      this.catid = this.$route.query.catid;
      this.id = this.$route.query.id;
      this.getDetail();
    },
  },
  mounted() {
    this.getDetail();
  },
  destroyed() {},
  methods: {
    getDetail() {
      this.$axios
        .fetchPost("/Mobile/Picture/getDetail", {
          catId: this.catid,
          id: this.id,
        })
        .then((res) => {
          if (res.data.code == 0) {
            this.detail = res.data.data;
          }
        });
    },
    goTonext() {
      this.$router.push({
        path: "/diseases_detail",
        query: {
          catid: this.detail.next_page.catid,
          id: this.detail.next_page.id,
        },
      });
    },
  },
};
</script>
<style lang="stylus" scoped>
.diseases_detail-container
  padding-bottom 50px
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
