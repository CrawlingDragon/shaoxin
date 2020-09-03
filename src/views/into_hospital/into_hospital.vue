<template>
  <div class="into_hospital-conatiner">
    <Header header="searchHeader"></Header>
    <div class="box" v-if="list_joinin != ''">
      <div class="title">加入的医院</div>
      <ul>
        <li v-for="item in list_joinin" :key="item.id">
          <RecommendHospital :list="item"></RecommendHospital>
        </li>
      </ul>
    </div>
    <div class="box" v-if="list_fav != ''">
      <div class="title">关注的医院</div>
      <ul>
        <li v-for="item in  list_fav" :key="item.id">
          <RecommendHospital :list="item"></RecommendHospital>
        </li>
      </ul>
    </div>
    <div class="box" v-if="list_area != ''">
      <div class="title">庄稼医院</div>
      <ul>
        <li v-for="item in list_area" :key="item.id">
          <RecommendHospital :list="item"></RecommendHospital>
        </li>
      </ul>
    </div>
    <Foot></Foot>
  </div>
</template>
<script>
import Header from "@/components/hospital_header/hospital_header";
import Foot from "@/components/foot/foot";
import RecommendHospital from "@/components/recommend_hospital/recommend_hospital";
import { mapState } from "vuex";

export default {
  name: "intoHospital",
  components: { Header, Foot, RecommendHospital },
  props: {},
  metaInfo: {
    title: "进院",
  },
  data() {
    return {
      list_joinin: "",
      list_fav: "",
      list_area: "",
    };
  },
  computed: {
    ...mapState(["uid"]),
  },
  watch: {},
  mounted() {
    this.getList();
  },
  destroyed() {},
  methods: {
    getList() {
      this.$axios
        .fetchPost("Mobile/Entrance/index", { uid: this.uid })
        .then((res) => {
          if (res.data.code == 0) {
            this.list_joinin = res.data.data.list_joinin;
            this.list_fav = res.data.data.list_fav;
            this.list_area = res.data.data.list_area;
          }
        });
    },
  },
};
</script>
<style lang="stylus" scoped>
.into_hospital-conatiner
  padding-bottom 50px
  .box
    margin-top 10px
    background #fff
    .title
      height 40px
      line-height 40px
      color #333
      font-size 17px
      border-bottom 1px solid #e5e5e5
      padding-left 12px
    ul
      column-count 2
      column-gap 0
      margin-left 12px
      margin-top 10px
      li
        break-inside avoid
        padding-right 12px
        margin-bottom 12px
</style>
