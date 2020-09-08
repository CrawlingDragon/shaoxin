<template>
  <div class="cetu_list-container">
    <Header :header="headerKind" navHeader="测土配方"></Header>
    <ul class="cetu_ul">
      <li v-for="item in list" :key="item.id" @click="goToDetail(item.id)">
        <div class="top">
          <div class="title">
            {{item.title}}
          </div>
          <div class="time">{{item.showtime}}</div>
        </div>
        <div class="hospital" v-if="headerKind == 'logoHeader'">{{item.mpublic}}</div>
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
  beforeRouteEnter(to, from, next) {
    console.log("from.name :>> ", from.name);
    if (from.name == null) {
      next();
      return;
    }
    if (from.name == "me") {
      next((vm) => {
        vm.headerKind = "logoHeader";
        window.localStorage.setItem("headerKind", "logoHeader");
      });
    } else {
      next((vm) => {
        vm.headerKind = "indexHeader";
        window.localStorage.setItem("headerKind", "indexHeader");
      });
    }
  },
  metaInfo() {
    return {
      title: "土壤检测",
    };
  },
  data() {
    return {
      headerKind: window.localStorage.getItem("headerKind"),
      list: [],
    };
  },
  computed: {
    ...mapState(["mid", "uid"]),
  },
  watch: {
    $route() {
      if (this.headerKind == "indexHeader") {
        this.getList(this.mid);
      } else {
        this.getMeList(this.uid);
      }
    },
  },
  mounted() {
    if (this.headerKind == "indexHeader") {
      this.getList(this.mid);
    } else {
      this.getMeList(this.uid);
    }
  },
  destroyed() {},
  methods: {
    getList(mid) {
      // 获取测土配方列表 医院
      this.$axios
        .fetchPost("/Mobile/Treatment/getTestingsoil", { mId: mid })
        .then((res) => {
          if (res.data.code == 0) {
            this.list = res.data.data;
          }
        });
    },
    getMeList(uid) {
      // 获取测土配方列表  个人
      this.$axios
        .fetchPost("/Mobile/Treatment/getTestingsoil", { uId: uid })
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
      padding 14px 0 12px
      min-height 50px
      &:last-child
        border none
      .top
        display flex
        align-items center
        flex-wrap nowrap
        .title
          min-width 0
          flex 1
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
          font-size 15px
          color #000
        .time
          width 100px
          margin-left 15px
          font-size 12px
          color #999
      .hospital
        width 100%
        color #999999
        font-size 12px
        line-height 22px
</style>
