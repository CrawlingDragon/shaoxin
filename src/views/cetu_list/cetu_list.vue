<template>
  <div class="cetu_list-container">
    <Header header="indexHeader" navHeader="测土配方"></Header>
    <ul class="cetu_ul">
      <li v-for="item in list" :key="item.id" @click="goToDetail(item.id)">
        <div class="title">
          {{item.title}}
        </div>
        <div class="time">{{item.showtime}}</div>
      </li>
    </ul>
  </div>
</template>
<script>
import Header from "@/components/hospital_header/hospital_header";
import { mapState } from "vuex";

export default {
  name: "cetuList",
  components: { Header },
  props: {},
  metaInfo() {
    return {
      title: "ss医院",
    };
  },
  data() {
    return {
      list: [],
    };
  },
  computed: {
    ...mapState(["mid"]),
  },
  watch: {
    $route() {
      this.getList(this.mid);
    },
  },
  mounted() {
    this.getList(this.mid);
  },
  destroyed() {},
  methods: {
    getList(mid) {
      // 获取测土配方列表
      this.$axios
        .fetchPost("/Mobile/Treatment/getTestingsoil", { mId: mid })
        .then((res) => {
          if (res.data.code == 0) {
            this.list = res.data.data;
          }
        });
    },
    goToDetail(id) {
      this.$router.push({
        path: "/soil_detail",
        query: { id: id },
      });
    },
  },
};
</script>
<style lang="stylus" scoped>
.cetu_list-container
  .cetu_ul
    padding-left 12px
    background #fff
    margin-top 10px
    li
      border-bottom 1px solid #e5e5e5
      height 50px
      display flex
      align-items center
      &:last-child
        border none
      .title
        min-width 0
        flex 1
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
      .time
        width 100px
        margin-left 15px
</style>
