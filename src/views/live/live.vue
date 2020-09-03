<template>
  <div class="live-container">
    <Header indexHeader="indexHeader" navHeader="直播"></Header>
    <div class="program" @click="goLive" v-if="menum == 1">直播节目单</div>
    <ul class="live-ul">
      <li v-for="item in list" :key="item.id" @click="liveHref(item.linkurl)">
        <van-image class="live-img" :src="item.thumb" fit="cover"></van-image>
        <div class="bottom">
          <div class="left">{{item.name}}</div>
          <div class="right">{{item.endtime}}</div>
        </div>
        <div class="status living" :class="{'living':item.status == '直播中','lived':item.status == '回放','before_live':item.status == '预告'}">{{item.status}}</div>
      </li>
    </ul>
  </div>
</template>
<script>
import Header from "@/components/hospital_header/hospital_header";
export default {
  name: "live",
  components: { Header },
  metaInfo() {
    return {
      title: "直播",
    };
  },
  props: {},
  data() {
    return {
      list: [],
      mid: this.$route.query.mid,
      menum: "",
    };
  },
  computed: {},
  watch: {},
  mounted() {
    this.getList();
  },
  destroyed() {},
  methods: {
    getList() {
      this.$axios
        .fetchPost("Mobile/Live/getLiveList", { mid: this.mid })
        .then((res) => {
          if (res.data.code == 0) {
            this.list = res.data.data;
            this.menum = res.data.hasmenu;
          }
        });
    },
    liveHref(link) {
      window.location.href = link;
    },
    goLive() {
      this.$router.push({
        path: "/live_list",
        query: {
          mid: this.mid,
        },
      });
    },
  },
};
</script>
<style lang="stylus" scoped>
.live-container
  .program
    width 80%
    margin 10px auto
    height 45px
    text-align center
    line-height 45px
    color #fff
    font-size 16px
    font-weight bold
    background linear-gradient(90deg, rgba(1, 181, 255, 1), rgba(0, 130, 254, 1))
    border-radius 8px
  .live-ul
    background #fff
    li
      padding 15px 12px 0
      border-bottom 1px solid #e5e5e5
      position relative
      &:last-child
        border-bottom none
      .live-img
        width 100%
        height 150px
      .bottom
        display flex
        justify-content space-between
        height 45px
        align-items center
        .left
          color #333333
          font-size 16px
        .right
          color #999999
          font-size 12px
      .status
        position absolute
        right 28px
        top 30px
        width 57px
        height 22px
        border-radius 23px
        text-align center
        line-height 22px
        font-size 12px
        color #fff
        &.living
          background #ff6600
        &.lived
          background #999999
        &.before_live
          background #155BBB
</style>
