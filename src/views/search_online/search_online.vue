<template>
  <div class="search-online">
    <Header :indexHeader="false"></Header>
    <form action="/">
      <van-search v-model="value" show-action clearable placeholder="请输入搜索关键词" @search="onSearch" @cancel="onCancel" />
    </form>
    <div class="content01" v-if="zuowu != ''">
      <div class="title">作物</div>
      <div class="text-box" v-for="item in zuowu" :key="item.fid" @click="goToCrop(item.name)">
        <van-image class="img" :src="item.icon"></van-image>
        <div class="text">
          <div class="p1">{{item.name}}</div>
          <div class="p2">网诊：{{item.threads}}次</div>
        </div>
      </div>
    </div>
    <div class="content02" v-if="online.length != ''">
      <div class="title">线上网诊</div>
      <ul class="online-ul">
        <li v-for="item in online" :key="item.id">
          <OnlineItem :list="item"></OnlineItem>
        </li>
      </ul>
    </div>
    <!-- <van-empty image="error" description="未搜索到符合条件的内容" v-else /> -->
  </div>
</template>
<script>
import Header from "@/components/header/header";
import OnlineItem from "@/components/online_item/online_item";
export default {
  name: "searchOnline",
  metaInfo: {
    title: "搜索网诊",
  },
  components: { Header, OnlineItem },
  props: {},
  data() {
    return { value: "", zuowu: [], online: [] };
  },
  created() {
    this.$emit("footer", false);
  },
  computed: {},
  watch: {},
  mounted() {},
  destroyed() {},
  methods: {
    onSearch(val) {
      // console.log("val :>> ", val);
      if (val != "") {
        this.getSearchResult(val);
      }
    },
    getSearchResult(keyword) {
      this.$axios.fetchPost("Mobile/Wen/index", { keyword }).then((res) => {
        if (res.data.code == 0) {
          this.zuowu = res.data.zwdata;
          this.online = res.data.data;
        }
      });
    },
    onCancel() {
      this.$router.push({
        path: "/index",
      });
    },
    goToCrop(name) {
      this.$router.push({
        path: "/searchOnlineCrop",
        query: { crop: name },
      });
    },
  },
};
</script>
<style lang="stylus" scoped>
.search-online
  .content01
    .title
      padding 15px 0
      color #999999
      font-size 12px
      padding-left 12px
    .text-box
      background #fff
      display flex
      padding 15px 12px
      align-items center
      .img
        width 60px
        height 60px
        margin-right 15px
        border-radius 10px
      .text
        flex 1
        .p1
          color #333333
          font-size 15px
          line-height 15px
          margin-bottom 7px
        .p2
          color #999999
          font-size 12px
  .content02
    .title
      padding 15px 0
      color #999999
      font-size 12px
      padding-left 12px
    .online-ul
      background #fff
      padding 0 12px
      li
        border-bottom 1px solid #e5e5e5
        &:last-child
          border none
</style>
